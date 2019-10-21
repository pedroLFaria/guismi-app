import React from "react";
import Descendencia from "./Descendencia";
import {Button, Col, FormControl, Modal, ModalBody, Row, Tab, Table, Tabs} from "react-bootstrap";
import Sistema from "../sistema/Sistema";

interface Props {
    descendencias: Descendencia[]
    adicionaDescendencia: Function
    descendenciaSelecionada?: Descendencia
    buttonIcon:String
    buttonText:String
}

interface State {
    show: boolean
    descendenciaSelecionada: Descendencia
    value: string
    isInvalid:boolean
}

export default class ModalDescendencia extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let descendenciaSelecionada = this.props.descendenciaSelecionada ? this.props.descendenciaSelecionada : Sistema.sistema.descendencias[0];
        this.state = {
            show: false,
            descendenciaSelecionada: descendenciaSelecionada,
            value: "0",
            isInvalid:false
        }
    }

    tabDesc() {
        return (
            <Tab eventKey={"descDescendencia"} title={"Descrição"}>
                <Row>
                    <Col>
                        {this.state.descendenciaSelecionada.descDescendencia}
                    </Col>
                </Row>
            </Tab>
        )
    }

    tabHabilidade() {
        if (this.state.descendenciaSelecionada.habilidades.length > 0) {
            return (
                <Tab eventKey={"habilidades"} title={"habilidades"}>
                    <Col>
                        {this.state.descendenciaSelecionada.habilidades.map((habilidade, index) => {
                            return (
                                <Row key={index}>
                                    <Col>
                                        {habilidade.nomeHabilidade}
                                    </Col>
                                    <Col>
                                        {habilidade.descHabilidade}
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                </Tab>
            )
        } else
            return (
                <Tab eventKey={"habilidades"} title={"habilidades"} disabled={true}>empty</Tab>
            )
    }

    tabHabitos() {
        if (this.state.descendenciaSelecionada.habitos.length > 0)
            return (
                <Tab eventKey={"habitos"} title={"habitos"}>
                    <Table>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.descendenciaSelecionada.habitos.map((habito, index) => {
                            return (
                                <tr key={index}>
                                    <td>{habito.nomeHabito}</td>
                                    <td>{habito.qtdFichaHabito}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Tab>
            );
        else
            return (
                <Tab eventKey={"habitos"} title={"habitos"} disabled={true}>empty</Tab>
            )
    }

    render() {
        return (
            <div>
                <Button
                    size={"sm"} variant="outline-info"
                    onClick={() => this.setState({show: true})}
                >{this.props.buttonIcon}</Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({show: false})}
                >
                    <Modal.Header closeButton>
                        <FormControl
                            value={this.state.value}
                            as={"select"}
                            plaintext={false}
                            isInvalid={this.state.isInvalid}
                            onChange={(e) => {
                                let value = (e.target as HTMLFormElement).value;
                                this.setState(state => {
                                    let descendenciaSelecionada = this.props.descendencias.find(function (descendencia) {
                                        return descendencia.idDescendencia.toString() === value
                                    });
                                    descendenciaSelecionada = descendenciaSelecionada ? descendenciaSelecionada : state.descendenciaSelecionada;
                                    return {
                                        descendenciaSelecionada: descendenciaSelecionada,
                                        value: descendenciaSelecionada!.idDescendencia.toString(),
                                        isInvalid:false
                                    }
                                })
                            }}
                        >
                            {this.props.descendencias.map((descendencia, index) => {
                                return (
                                    <option value={descendencia.idDescendencia}
                                            key={index}
                                    >
                                        {descendencia.nomeDescendencia}
                                    </option>)
                            })}
                        </FormControl>
                    </Modal.Header>
                    <ModalBody>
                        <Tabs defaultActiveKey={"descDescendencia"} id={"tab-escolha-descendencia"}>
                            {this.tabDesc()}
                            {this.tabHabilidade()}
                            {this.tabHabitos()}
                        </Tabs>
                        <Row>
                            <Button variant="outline-info" onClick={() => {
                                if (this.props.adicionaDescendencia(this.state.descendenciaSelecionada, this.props.descendenciaSelecionada)) {
                                    this.setState({
                                        show: false
                                    });
                                }else{
                                    this.setState({
                                        isInvalid:true
                                    });
                                }
                            }}
                            >
                                {this.props.buttonText}
                            </Button>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
