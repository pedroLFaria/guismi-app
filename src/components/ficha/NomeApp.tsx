import React, {FormEvent} from 'react'
import Form from 'react-bootstrap/Form'
import Ficha from "./Ficha";

interface Props {
    ficha: Ficha
    updateFicha: Function
}

interface State {
    readOnly: boolean
    nomePersonagem: string
}

class NomeApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            readOnly: true,
            nomePersonagem: this.props.ficha.nomePersonagem
        };
        this.onDoubleClick = this.onDoubleClick.bind(this)
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.ficha.nomePersonagem !== this.props.ficha.nomePersonagem)
            this.setState({nomePersonagem: this.props.ficha.nomePersonagem})
    }

    onDoubleClick() {
        this.setState({readOnly: false})
    }

    onBlur() {
        this.setState({readOnly: true});
        let ficha = this.props.ficha;
        ficha.nomePersonagem = this.state.nomePersonagem;
        this.props.updateFicha(ficha);
    }

    handleChange(event: FormEvent) {
        let value = (event.target as HTMLInputElement).value;
        this.setState({
            nomePersonagem: value
        })
    }

    render() {
        return (
            <Form.Control
                as={"input"}
                type={"text"}
                value={this.state.nomePersonagem}
                plaintext={this.state.readOnly}
                readOnly={this.state.readOnly}
                onDoubleClick={this.onDoubleClick}
                onBlur={this.onBlur.bind(this)}
                onChange={this.handleChange.bind(this)}
            />
        )
    }
}

export {NomeApp}
