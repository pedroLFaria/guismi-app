import React from 'react'
import Form from "react-bootstrap/Form";

class RacaApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: this.props.sistema
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.state.ficha.idRaca = Number(event.target.value)
        this.setState({ficha: this.state.ficha});
        this.render();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.ficha.idRaca !== this.props.ficha.idRaca)
            this.setState({ficha: this.props.ficha})
    }

    render() {
        return (
            <Form.Group>
                <Form.Label column={false}>Raca</Form.Label>
                <Form.Control value={this.state.ficha.idRaca} as={"select"} onChange={this.handleChange}>
                    {this.state.sistema.racas.map(
                        (raca) => <option value={raca.idRaca}>{raca.nomeRaca}</option>)
                    }
                </Form.Control>
            </Form.Group>
        )
    }
}

export {RacaApp}
