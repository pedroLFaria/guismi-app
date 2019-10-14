import React from "react";
import { Button, Col, Form, FormControl, FormGroup, Modal, ModalBody, ModalTitle, Row } from "react-bootstrap";
import Ficha from "../ficha/Ficha";
import Sistema from "../sistema/Sistema";
import Descendencia from "./Descendencia";
import ModalEscolhaDescendencia from "./ModalEscolhaDescendencia";
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
            this.setState({ ficha: this.props.ficha })
    }

    handleChange() {

    }

    adicionaDescendencia(novaDescendencia : Descendencia){
        this.setState(state=>{
            state.ficha.descendencias.push(novaDescendencia);
            return{
                ficha:state.ficha
            }
        })
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
                    <Col  lg={"auto"} md={"auto"}>
                        <ModalEscolhaDescendencia
                            descendencias={Sistema.sistema.descendencias}
                            descendenciaEscolhida={this.adicionaDescendencia.bind(this)}
                        />
                    </Col>
                </Row>
                {this.state.ficha.descendencias.map((descendencia, index) => {
                    return (
                        <Row
                        key={index}
                        >
                            <Col lg={10}>
                                <FormControl
                                    as={"select"}
                                    plaintext={true}
                                    value={descendencia.idDescendencia.toString()}
                                    key={index}
                                >
                                    {this.state.sistema.descendencias.map((descendencia, index) => {
                                        return (
                                            <option value={descendencia.idDescendencia}
                                                key={index}
                                            >
                                                {descendencia.nomeDescendencia}
                                            </option>)
                                    })}
                                </FormControl>
                            </Col>
                            <Col lg={"auto"} md={"auto"}>
                                <Button size={"sm"} variant="outline-info"
                                    onClick={() => this.setState(state => {
                                        state.modalDescShow[index] = true;
                                        return { modalDescShow: state.modalDescShow }
                                    })}>#</Button>
                            </Col>
                            <Modal show={this.state.modalDescShow[index]} onHide={() => this.setState(state => {
                                state.modalDescShow[index] = false;
                                return { modalDescShow: state.modalDescShow }
                            })}
                                key={index}>
                                <Modal.Header closeButton>
                                    <ModalTitle>{descendencia.nomeDescendencia}</ModalTitle>
                                </Modal.Header>
                                <ModalBody>{descendencia.descDescendencia}</ModalBody>
                            </Modal>
                        </Row>
                    )
                }
                )}
            </FormGroup>
        );
    }
}
