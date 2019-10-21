import * as React from "react";
import Ficha from "../ficha/Ficha";
import Caminho from "./Caminho";
import CaminhoApp from "./CaminhoApp";
import { Button, Col, Row } from "react-bootstrap";


interface Props {
    ficha: Ficha
    updateFicha(arg0: Ficha): void
}

interface State {
    caminhos: Caminho[]
    shows: boolean[]
}

class CaminhosApp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            caminhos: this.props.ficha.caminhos,
            shows: []
        };
    }

    componentDidUpdate(prevProps: Readonly<Props>) {
        if (JSON.stringify(prevProps.ficha.caminhos) !== JSON.stringify(this.props.ficha.caminhos))
            this.setState({
                caminhos: this.props.ficha.caminhos
            })
    }

    updateCaminhos(index: number, newCaminho: Caminho): boolean {
        let ficha = this.props.ficha;
        ficha.caminhos[index] = newCaminho;
        this.props.updateFicha(ficha);
        return true
    }

    addCaminho(newCaminho: Caminho): boolean {
        let ficha = this.props.ficha;
        ficha.caminhos.push(newCaminho);
        return true
    }

    deleteCaminho(index: number): boolean {
        let ficha = this.props.ficha;
        ficha.caminhos.splice(index, 1);
        return true
    }

    render() {
        console.log(this.props.ficha.caminhos);
        return (
            <Col>
                    {this.state.caminhos.map((caminho, index) => {
                        return (
                            <Row
                                key={index}
                            >
                              <Col md={5}>
                                <Button
                                    variant={"light"}
                                    block
                                    onClick={() => this.setState(state => {
                                        state.shows[index] = !state.shows[index];
                                        return ({ shows: state.shows })
                                    })}
                                >
                                    {caminho.nomeCaminho}
                                </Button>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <CaminhoApp
                                    show={this.state.shows[index]}
                                    caminhos={this.state.caminhos}
                                    index={index}
                                    addCaminho={this.addCaminho.bind(this)}
                                    updateCaminhos={this.updateCaminhos.bind(this)}
                                    deleteCaminho={this.deleteCaminho.bind(this)}
                                />
                                <Button
                                    size={"sm"} variant="outline-danger"
                                    onClick={() => this.deleteCaminho(index)}
                                >&#10005;
                                </Button>
                                </Col>
                              </Row>
                        )
                    })}

            </Col>
        )
    }
}

export { CaminhosApp }
