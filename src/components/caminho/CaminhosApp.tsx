import * as React from "react";
import Form from "react-bootstrap/Form";
import Ficha from "../ficha/Ficha";
import Sistema from "../sistema/Sistema";
import Caminho from "./Caminho";
import CaminhoApp from "./CaminhoApp";

interface Props {
    ficha: Ficha
}

interface State {
    ficha: Ficha,
    sistema: Sistema,
    isInvalid: boolean[]
}

class CaminhosApp extends React.Component<Props, State> {
    private caminhoOptions: JSX.Element[] | undefined;

    constructor(props: Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: Sistema.sistema,
            isInvalid: []
        };
    }

    componentDidMount(): void {
        this.caminhoOptions = this.state.sistema.caminhos.map(caminho =>
            <option key={caminho.idCaminho} value={caminho.idCaminho}>
                {caminho.nomeCaminho}
            </option>
        );
        this.setState(state => {
            state.isInvalid.fill(false, 0, state.ficha.caminhos.length);
        });
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(JSON.stringify(prevProps.ficha.caminhos) !== JSON.stringify(this.props.ficha.caminhos))
            this.setState({
                ficha:this.props.ficha
            })
    }

    handleChange(event: any, caminho: Caminho, index: number) {
        if (this.state.ficha.caminhos.find(caminho => caminho.idCaminho === Number(event.target.value))) {
            this.setState(state => {
                state.isInvalid[index] = true;
                return {isInvalid: state.isInvalid}
            });
            setInterval(() => this.setState(state => {
                state.isInvalid[index] = false;
                return {isInvalid: state.isInvalid}
            }), 2000);
            return
        }
        caminho.idCaminho = Number(event.target.value);
        this.setState({ficha: this.state.ficha});
        this.state.ficha.update()
    }

    render() {
        return (
            <Form.Group>
                <Form.Label column={false}>Caminhos</Form.Label>
                {this.state.ficha.caminhos.map((caminho, index) => {
                    return (<CaminhoApp
                        key={index}
                        caminho={caminho}
                        ficha={this.state.ficha}
                    />)
                })}
            </Form.Group>
        )
    }
}

export {CaminhosApp}
