import React from "react";
import {Button, Col, Form, FormControl, FormGroup, ListGroup, Row} from "react-bootstrap";
import Ficha from "../ficha/Ficha";
import Sistema from "../sistema/Sistema";

interface Props {
    ficha: Ficha
}

interface State {
    ficha: Ficha,
    sistema: Sistema,
    readonly: boolean
}

export default class DescendenciasApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: Sistema.sistema,
            readonly: true
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (JSON.stringify(prevProps.ficha.descendencias) !== JSON.stringify(this.props.ficha.descendencias))
            this.setState({ficha: this.props.ficha})
    }


    render() {
        return (
            <FormGroup>
                <Form.Label column={false}>Descendencias</Form.Label>
                {this.state.ficha.descendencias.map((descendencia, index) => {
                        return (
                            <Row>
                                <Col>
                                    <FormControl
                                        as={"select"}
                                        readOnly={this.state.readonly}
                                        plaintext={this.state.readonly}
                                        value={descendencia.idDescendencia.toString()}
                                        key={index}
                                    >
                                        {this.state.sistema.descendencias.map((descendencia, index) => {
                                            return (
                                                <option value={descendencia.idDescendencia}
                                                        key={index}>
                                                    {descendencia.nomeDescendencia}
                                                </option>)
                                        })}
                                    </FormControl>
                                </Col>
                                <Col>
                                    <Button size={"sm"} variant="outline-info">#</Button>
                                </Col>
                            </Row>
                        )
                    }
                )}
            </FormGroup>
        );
    }
}
