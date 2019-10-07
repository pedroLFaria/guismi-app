import React from 'react'
import Form from 'react-bootstrap/Form'
import Ficha from "./Ficha";

interface Props{
    ficha:Ficha
}

interface State{
    ficha:Ficha
    plaintext : boolean
    readOnly  : boolean
}

class NomeApp extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            plaintext: true,
            readOnly: true
        };
        this.onClick = this.onClick.bind(this)
    }

    componentDidUpdate(prevProps:Props) {
        if (prevProps.ficha.nomePersonagem !== this.props.ficha.nomePersonagem)
            this.setState({ficha: this.props.ficha})
    }

    onClick() {
        this.setState({plaintext: false, readOnly: false})
    }

    onBlur() {
        this.setState({plaintext: true, readOnly: true})
        this.state.ficha.update()
    }

    render() {
        return (
            <Form.Control
                type="text"
                defaultValue={this.state.ficha.nomePersonagem}
                plaintext={this.state.plaintext}
                readOnly={this.state.readOnly}
                onClick={this.onClick}
                onBlur={this.onBlur.bind(this)}
            />
        )
    }
}

export {NomeApp}
