import React from "react";
import {Col, Form, FormGroup, Row} from "react-bootstrap";
import Ficha from "../ficha/Ficha";
import Sistema from "../sistema/Sistema";
import Descendencia from "./Descendencia";
import ModalDescendencia from "./ModalDescendencia";
import "./DescendenciasApp.css"

interface Props {
    ficha: Ficha
}

interface State {
    ficha: Ficha,
    sistema: Sistema,
    modalDescShow: boolean[],
    modalCriacShow: boolean,
    descendenciaSelecionada?: Descendencia
}

export default class DescendenciasApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: Sistema.sistema,
            modalDescShow: [],
            modalCriacShow: false
        };
    }


    componentDidMount(): void {
        this.setState(state => {
            state.modalDescShow.fill(false, 0, state.ficha.descendencias.length);
            return {
                modalDescShow: state.modalDescShow
            }
        })
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (JSON.stringify(prevProps.ficha.descendencias) !== JSON.stringify(this.props.ficha.descendencias))
            this.setState({ficha: this.props.ficha})
    }

    trocaDescendencia(novaDescendencia: Descendencia, prevDescendencia: Descendencia) {
        let index = this.state.ficha.descendencias.findIndex(descendencia => {
            return (
                prevDescendencia.idDescendencia === descendencia.idDescendencia
            )
        });
        if (!this.state.ficha.descendencias.find((descendencia) => {
            return descendencia.idDescendencia === novaDescendencia.idDescendencia
        })) {
            this.setState(state => {
                state.ficha.descendencias[index] = novaDescendencia;
                return {
                    ficha: state.ficha
                }
            });
            return true
        } else {
            return false
        }
    }

    adicionaDescendencia(novaDescendencia: Descendencia) {
        if (!this.state.ficha.descendencias.find((descendencia) => {
            return descendencia.idDescendencia === novaDescendencia.idDescendencia
        })) {
            this.setState(state => {
                state.ficha.descendencias.push(novaDescendencia);
                return {
                    ficha: state.ficha
                }
            });
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <FormGroup>
                <Row>
                    <Col lg={10}>
                        <Form.Label column={false}>
                            Descendencias
                        </Form.Label>
                    </Col>
                    <Col lg={"auto"} md={"auto"}>
                        <ModalDescendencia
                            buttonIcon={"+"}
                            buttonText={"Add"}
                            descendencias={Sistema.sistema.descendencias}
                            adicionaDescendencia={this.adicionaDescendencia.bind(this)}
                        />
                    </Col>
                </Row>
                {this.state.ficha.descendencias.map((descendencia, index) => {
                        return (
                            <Row
                                key={index}
                            >
                                <Col lg={10}>
                                    <p>{descendencia.nomeDescendencia}</p>
                                </Col>
                                <Col lg={"auto"} md={"auto"}>
                                    <ModalDescendencia
                                        buttonIcon={"#"}
                                        buttonText={"Save"}
                                        descendencias={Sistema.sistema.descendencias}
                                        adicionaDescendencia={this.trocaDescendencia.bind(this)}
                                        descendenciaSelecionada={descendencia}
                                    />
                                </Col>
                            </Row>
                        )
                    }
                )}
            </FormGroup>
        );
    }
}
