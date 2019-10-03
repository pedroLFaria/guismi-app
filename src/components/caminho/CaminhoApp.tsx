import * as React from "react";
import Form from "react-bootstrap/Form";
import Sistema from "../sistema/sistema";
import Ficha from "../ficha/Ficha"

interface Guism {
    ficha: Ficha,
    sistema: Sistema
}

class CaminhosApp extends React.Component<Guism, Guism> {

    render() {
        const ficha: Ficha = this.props.ficha
        return (
            <Form.Group>
                <Form.Label column={false}>Raca</Form.Label>
                <Form.Control/>
            </Form.Group>
        )
    }
}

export {CaminhosApp}
