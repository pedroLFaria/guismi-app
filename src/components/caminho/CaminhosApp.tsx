import * as React from "react";
import Form from "react-bootstrap/Form";
import Ficha from "../ficha/Ficha";
import Caminho from "./Caminho";
import CaminhoApp from "./CaminhoApp";
import { Row } from "react-bootstrap";

interface Props {
    ficha: Ficha
    updateFicha(arg0: Ficha): void
}

interface State {
    caminhos: Caminho[]
}

class CaminhosApp extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            caminhos: this.props.ficha.caminhos
        };
        this.updateCaminhos = this.updateCaminhos.bind(this)
    }

    componentDidUpdate(prevProps: Readonly<Props>) {
        if (JSON.stringify(prevProps.ficha.caminhos) !== JSON.stringify(this.props.ficha.caminhos))
            this.setState({
                caminhos: this.props.ficha.caminhos
            })
    }

    updateCaminhos(prevCaminhoId: number, newCaminho: Caminho): boolean {
        let ficha = this.props.ficha;
        if (ficha.caminhos.find(caminho => caminho.idCaminho === newCaminho.idCaminho))
            return false;
        else {
            let index = ficha.caminhos.findIndex((caminho) => caminho.idCaminho === prevCaminhoId)
            ficha.caminhos[index] = newCaminho;
            this.props.updateFicha(ficha);
            return true
        }
    }

    render() {
        return (
            <div>
                <label>
                    Caminhos
                </label>
                {this.state.caminhos.map((caminho, index) => {
                    return (
                        <Row
                            key={index}
                        >
                            <CaminhoApp
                                updateCaminhos={this.updateCaminhos}
                                caminho={caminho}
                            />
                        </Row>
                    )
                })}

            </div>
        )
    }
}

export { CaminhosApp }
