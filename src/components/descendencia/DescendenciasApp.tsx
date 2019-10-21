import React from "react";
import {Button, Col, Form, FormGroup, Row} from "react-bootstrap";
import Ficha from "../ficha/Ficha";
import Descendencia from "./Descendencia";
import DescendenciaApp from "./DescendenciaApp";
import "./DescendenciasApp.css"

interface Props {
    ficha: Ficha
}

interface State {
    descendencias:Descendencia[]
    modalCriacShow: boolean,
    descendenciaSelecionada?: Descendencia
}

export default class DescendenciasApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            descendencias:this.props.ficha.descendencias,
            modalCriacShow: false
        };
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (JSON.stringify(prevProps.ficha.descendencias) !== JSON.stringify(this.props.ficha.descendencias))
            this.setState({descendencias: this.props.ficha.descendencias})
    }

    updateDescendencia(novaDescendencia: Descendencia, prevDescendencia: Descendencia) {
        let index = this.state.descendencias.findIndex(descendencia => {
            return (
                prevDescendencia.idDescendencia === descendencia.idDescendencia
            )
        });
        if (!this.state.descendencias.find((descendencia) => {
            return descendencia.idDescendencia === novaDescendencia.idDescendencia
        })) {
            this.setState(state => {
                state.descendencias[index] = novaDescendencia;
                return {
                    descendencias: state.descendencias
                }
            });
            return true
        } else {
            return false
        }
    }

    addDescendencia(novaDescendencia: Descendencia) {
        if (!this.state.descendencias.find((descendencia) => {
            return descendencia.idDescendencia === novaDescendencia.idDescendencia
        })) {
            this.setState(state => {
                state.descendencias.push(novaDescendencia);
                return {
                    descendencias: state.descendencias
                }
            });
            return true
        } else {
            return false
        }
    }
    deleteDescendencia(descendencias:Descendencia[], index:number){
        descendencias.splice(index,1);
        this.setState({
            descendencias:descendencias
        })
    }

    render() {
        const descendencias = this.state.descendencias;
        return (
            <FormGroup>
                <Row>
                    <Col lg={10}>
                        <Form.Label column={false}>
                            Descendencias
                        </Form.Label>
                    </Col>
                    <Col lg={"auto"} md={"auto"}>
                        <DescendenciaApp
                            buttonIcon={"+"}
                            buttonText={"Add"}
                            index={0}
                            descendencias={descendencias}
                            updateDescendencia={this.addDescendencia.bind(this)}
                        />
                    </Col>
                </Row>
                {descendencias.map((descendencia, index) => {
                        return (
                            <Row
                                key={index}
                            >
                                <Col lg={10}>
                                    <p>{descendencia.nomeDescendencia}</p>
                                </Col>
                                <Col md={"auto"}>
                                    <DescendenciaApp
                                        buttonIcon={"Editar"}
                                        buttonText={"Save"}
                                        index={index}
                                        updateDescendencia={this.updateDescendencia.bind(this)}
                                        descendencias={this.state.descendencias}
                                    />
                                </Col>
                                <Col md style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <Button
                                        size={"sm"} variant="outline-danger"
                                        onClick={()=>this.deleteDescendencia(descendencias,index)}
                                    >&#10005;</Button>
                                </Col>
                            </Row>
                        )
                    }
                )}
            </FormGroup>
        );
    }
}
