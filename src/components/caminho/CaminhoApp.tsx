import * as React from "react";
import Caminho from "./Caminho";
import Form from "react-bootstrap/Form";
import Sistema from "../sistema/Sistema";
import Ficha from "../ficha/Ficha";

interface Props {
    caminho: Caminho,
    ficha: Ficha
}

interface State {
    caminho: Caminho,
    caminhosSistema: Caminho[]
}

export default class CaminhosApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            caminho: this.props.caminho,
            caminhosSistema: Sistema.sistema.caminhos
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState(state => {
            state.caminho.idCaminho = Number(value);
            return {caminho: state.caminho}
        });
    }

    render() {
        return (
            <Form.Control
                as={"select"}
                value={this.state.caminho.idCaminho.toString()}
                onChange={this.handleChange.bind(this)}>
                {this.state.caminhosSistema.map((caminhoSistema, index) => {
                    return (
                        <option key={index} value={caminhoSistema.idCaminho}>
                            {caminhoSistema.nomeCaminho}
                        </option>
                    )
                })}
            </Form.Control>
        )
    }
}
