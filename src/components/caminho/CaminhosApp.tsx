import * as React from "react";
import Caminho from "./Caminho";
import CaminhoApp from "./CaminhoApp";
import {Button, Col, Container, Row} from "react-bootstrap";
import Sistema from "../sistema/Sistema";


interface Props {
    caminhos: Caminho[]
    updateCaminhos(caminhos: Caminho[]): boolean
}

interface State {
    showPlus: boolean
    shows: boolean[]
}

export default class CaminhosApp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            showPlus: false,
            shows: []
        };
    }

    updateCaminhos(newCaminho: Caminho, prevCaminho: Caminho): boolean {
        let caminhos = this.props.caminhos;
        let index = this.findIndex(prevCaminho, this.props.caminhos);
        if (index !== -1) {
            caminhos[index] = newCaminho;
            return this.props.updateCaminhos(caminhos)
        } else {
            return false
        }
    }

    addCaminho(newCaminho: Caminho): boolean {
        let caminhos = this.props.caminhos;
        let index = this.findIndex(newCaminho, caminhos);
        if (index === -1) {
            caminhos.push(newCaminho);
            return this.props.updateCaminhos(caminhos)
        } else {
            return false;
        }
    }

    deleteCaminho(caminho: Caminho): boolean {
        let caminhos = this.props.caminhos;
        let index = this.findIndex(caminho, caminhos);
        if (index !== -1) {
            caminhos.splice(index, 1);
            return this.props.updateCaminhos(caminhos)
        }
        return true
    }

    findIndex(caminho: Caminho, caminhos: Caminho[]) {
        return caminhos.findIndex(element =>
            element.idCaminho === caminho.idCaminho);
    }

    handleShow(index?: number) {
        if (index !== undefined) {
            this.setState(state => {
                state.shows[index] = true;
                return {shows: state.shows}
            })
        } else {
            this.setState({showPlus: true})
        }
    }


    handleHide(index?: number) {
        if (index !== undefined) {
            this.setState(state => {
                state.shows[index] = false;
                return {shows: state.shows}
            })
        } else {
            this.setState({showPlus: false})
        }
    }

    render() {
        const caminhos = this.props.caminhos;
        return (
            <Container>
                <Col>
                    caminhos
                    {this.renderAddCaminho()}
                    {this.props.caminhos.map((caminho, index) => {
                        return (
                            <Row
                                key={index}
                            >
                                <Col md={5}>
                                    <Button
                                        variant={"light"}
                                        block
                                        onClick={() => this.handleShow(index)}
                                    >
                                        {caminho.nomeCaminho}
                                    </Button>
                                </Col>
                                <Col style={{paddingLeft: 0, paddingRight: 0}}>
                                    <CaminhoApp
                                        caminho={caminho}
                                        show={this.state.shows[index]}
                                        add={this.addCaminho.bind(this)}
                                        update={this.updateCaminhos.bind(this)}
                                        delete={this.deleteCaminho.bind(this)}
                                        handleHide={() => this.handleHide(index)}
                                    />
                                    <Button
                                        size={"sm"} variant="outline-danger"
                                        onClick={() => this.deleteCaminho(caminho)}
                                    >&#10005;
                                    </Button>
                                </Col>
                            </Row>
                        )
                    })}
                </Col>
            </Container>
        )
    }

    renderAddCaminho() {
        if (this.props.caminhos.length === 0) {
            return (
                <Row>
                    <Button
                        variant={"light"}
                        block
                        onClick={() => this.handleShow()}
                    >Novo Caminho</Button>
                    <CaminhoApp
                        caminho={Sistema.caminhos[0]}
                        add={this.addCaminho.bind(this)}
                        show={this.state.showPlus}
                        handleHide={() => this.handleHide()}
                    />
                </Row>)
        }
    }
}
