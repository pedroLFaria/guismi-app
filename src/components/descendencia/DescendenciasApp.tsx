import React from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import Descendencia from "./Descendencia";
import DescendenciaApp from "./DescendenciaApp";
import "./DescendenciasApp.css"
import Sistema from "../sistema/Sistema";

interface Props {
    descendencias: Descendencia[]
    updateDescendencias(descendencias: Descendencia[]): boolean
}

interface State {
    show: boolean[]
    showPlus: boolean
}

export default class DescendenciasApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            show: [],
            showPlus: false
        };
    }

    updateDescendencia(newDescendencia: Descendencia, prevDescendencia: Descendencia) {
        let descendencias = this.props.descendencias;
        let index = this.findIndex(prevDescendencia, descendencias);
        if (index !== -1) {
            descendencias[index] = newDescendencia;
            return this.props.updateDescendencias(descendencias);
        } else {
            return false
        }
    }

    addDescendencia(newDescendencia: Descendencia) {
        let descendencias = this.props.descendencias;
        let index = this.findIndex(newDescendencia, this.props.descendencias);
        if (index === -1) {
            descendencias.push(newDescendencia);
            return this.props.updateDescendencias(descendencias);
        } else {
            return false;
        }
    }

    deleteDescendencia(descendencia: Descendencia) {
        let descendencias = this.props.descendencias;
        let index = this.findIndex(descendencia, descendencias);
        if (index !== -1) {
            descendencias.splice(index, 1);
            return this.props.updateDescendencias(descendencias);
        } else {
            return false
        }
    }

    findIndex(descendencia: Descendencia, descendencias: Descendencia[]) {
        return descendencias.findIndex(element =>
            element.idDescendencia === descendencia.idDescendencia)
    }

    handleShow(index?: number) {
        if (index !== undefined) {
            this.setState(state => {
                state.show[index] = true;
                return { show: state.show }
            })
        } else {
            this.setState({ showPlus: true })
        }
    }


    handleHide(index?: number) {
        if (index !== undefined) {
            this.setState(state => {
                state.show[index] = false;
                return { show: state.show }
            })
        } else {
            this.setState({ showPlus: false })
        }
    }

    render() {
        const descendencias = this.props.descendencias;
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Label column={false}>
                            Descendencias
                        </Form.Label>
                    </Col>
                    <Col>
                        <Button
                            size={"sm"}
                            variant={"outline-info"}
                            onClick={() => this.handleShow()}
                        >+</Button>
                        <DescendenciaApp
                            descendencia={Sistema.descendencias[0]}
                            add={this.addDescendencia.bind(this)}
                            show={this.state.showPlus}
                            handleHide={() => this.handleHide()}
                        />
                    </Col>
                </Row>
                {descendencias.map((descendencia, index) => {
                    return (
                        <Row key={index}>
                            <Col md={8}>
                                <Button
                                    variant={"light"}
                                    block
                                    onClick={() => this.handleShow(index)}
                                >
                                    {descendencia.nomeDescendencia}
                                </Button>
                            </Col>
                            <Col md={"auto"}>
                                <DescendenciaApp
                                    descendencia={descendencia}
                                    show={this.state.show[index]}
                                    update={this.updateDescendencia.bind(this)}
                                    add={this.addDescendencia.bind(this)}
                                    delete={this.deleteDescendencia.bind(this)}
                                    handleHide={() => this.handleHide(index)}
                                />
                            </Col>
                            <Col md style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <Button
                                    size={"sm"} variant="outline-danger"
                                    onClick={() => this.deleteDescendencia(descendencia)}
                                >&#10005;</Button>
                            </Col>
                        </Row>
                    )
                }
                )}
            </Container>
        );
    }
}
