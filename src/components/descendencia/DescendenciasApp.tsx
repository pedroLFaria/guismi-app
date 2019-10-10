import React from "react";
import {Button, Col, Form, FormControl, FormGroup, Modal, ModalBody, ModalTitle, Row} from "react-bootstrap";
import Ficha from "../ficha/Ficha";
import Sistema from "../sistema/Sistema";
import Descendencia from "./Descendencia";

interface Props {
    ficha: Ficha
}

interface State {
    ficha: Ficha,
    sistema: Sistema,
    modalDescShow: boolean[],
    modalCriacShow: boolean,
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
        this.handleChange = this.handleChange.bind(this);
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

    handleChange() {

    }

    render() {
        let descendenciaSelecionada:Descendencia = this.state.sistema.descendencias[3];
        return (
            <FormGroup>
                <Row>
                    <Col lg={10}>
                        <Form.Label column={false}>
                            Descendencias
                        </Form.Label>
                    </Col>
                    <Col lg={"auto"}>
                        <Button size={"sm"} variant="outline-info" onClick={()=>this.setState({modalCriacShow:true})}>+</Button>
                    </Col>
                    <Modal
                        size="lg"
                        show={this.state.modalCriacShow}
                        onHide={() => this.setState( {modalCriacShow:false })}
                    >
                        <Modal.Header>
                            <ModalTitle>Nova descendência</ModalTitle>
                        </Modal.Header>
                        <ModalBody>
                            <Row>
                            <FormControl
                                as={"select"}
                                plaintext={true}
                                onChange={(e)=>console.log(e.target)}
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
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                        Descrição
                                    </Row>
                                    <Row>
                                    {descendenciaSelecionada.descDescendencia}
                                    </Row>
                                </Col>
                                <Col>Habilidades:
                                    {descendenciaSelecionada.habilidades.map((habilidade,index)=>{
                                    return(
                                        <Row key={index}>{habilidade.nomeHabilidade}</Row>
                                    )
                                })}</Col>
                                <Col>
                                    {descendenciaSelecionada.habitos.map((habito,index)=>{
                                        return(
                                            <p>{habito.nomeHabito}</p>
                                        )
                                    })}
                                </Col>
                            </Row>
                        </ModalBody>
                    </Modal>
                </Row>
                {this.state.ficha.descendencias.map((descendencia, index) => {
                        return (
                            <Row>
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
                                                return {modalDescShow: state.modalDescShow}
                                            })}>#</Button>
                                </Col>
                                <Modal show={this.state.modalDescShow[index]} onHide={() => this.setState(state => {
                                    state.modalDescShow[index] = false;
                                    return {modalDescShow: state.modalDescShow}
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
