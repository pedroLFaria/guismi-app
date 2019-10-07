import React from 'react'
import Form from "react-bootstrap/Form";
import Ficha from "../ficha/Ficha";
import Sistema from "../sistema/Sistema";

interface Props {
    ficha : Ficha
}

interface State {
    ficha : Ficha
    sistema : Sistema
}

class RacaApp extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: Sistema.sistema
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event:any) {
        this.state.ficha.idRaca = Number(event.target.value);
        this.setState({ficha: this.state.ficha});
        this.render();
    }

    componentDidUpdate(prevProps:Props, prevState : State) {
        if (prevProps.ficha.raca !== this.props.ficha.raca)
            this.setState({ficha: this.props.ficha})
    }

    render() {
        return (
            <Form.Group>
                <Form.Label column={false}>Raca</Form.Label>
                <Form.Control value={this.state.ficha.idRaca!.toString()} as={"select"} onChange={this.handleChange}>
                    {this.state.sistema.racas.map(
                        (raca) => <option key={raca.idRaca} value={raca.idRaca}>{raca.nomeRaca}</option>
                    )}
                </Form.Control>
            </Form.Group>
        )
    }
}

export {RacaApp}
