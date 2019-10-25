import React, {FormEvent} from "react";
import Descendencia from "./Descendencia";
import {Button, Col, FormControl, Modal, ModalBody, ModalFooter, Row, Tab, Table, Tabs} from "react-bootstrap";
import Sistema from "../sistema/Sistema";

interface Props {
    handleHide: Function
    descendencia: Descendencia
    show: boolean

    add?(newDescendencia: Descendencia): boolean

    update?(newDescendencia: Descendencia, prevDescendencia: Descendencia): boolean

    delete?(descendencia: Descendencia): boolean
}

interface State {
    descendencia: Descendencia
    value: string
    isInvalid: boolean
}

export default class DescendenciaApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            descendencia: this.props.descendencia,
            value: this.props.descendencia.idDescendencia.toString(),
            isInvalid: false
        }
    }

    handleChange(event: FormEvent) {
        let value = (event.target as HTMLFormElement).value;
        let descendencia = Sistema.descendencias.find(descendencia => descendencia.idDescendencia === Number(value));
        if (descendencia !== undefined)
            this.setState({
                descendencia: descendencia,
                value: value,
                isInvalid: false
            });
        else
            alert("Ops algo deu errado!");
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (!prevProps.show && this.props.show) {
            this.setState({
                value: this.props.descendencia.idDescendencia.toString(),
                descendencia: this.props.descendencia
            })
        }
    }

    handleInvalid() {
        this.setState({isInvalid: true});
        setTimeout(() => this.setState({isInvalid: false}), 1000)
    }

    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={() => this.props.handleHide()}
                >
                    <Modal.Header closeButton>
                        <FormControl
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                            as={"select"}
                            plaintext={false}
                            isInvalid={this.state.isInvalid}
                        >
                            {Sistema.descendencias.map((descendencia, index) =>
                                <option
                                    value={descendencia.idDescendencia.toString()}
                                    key={index}
                                >
                                    {descendencia.nomeDescendencia}
                                </option>
                            )}
                        </FormControl>
                    </Modal.Header>
                    <ModalBody>
                        <Tabs defaultActiveKey={"descDescendencia"} id={"tab-escolha-descendencia"}>
                            {this.tabDesc()}
                            {this.tabHabilidade()}
                            {this.tabHabitos()}
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        {this.renderBotoes()}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    renderBotoes() {
        let botoes = [];
        if (this.props.add !== undefined) {
            botoes.push(
                <Button
                    onClick={() => {
                        this.props.add!(this.state.descendencia) ?
                            this.props.handleHide() : this.handleInvalid()
                    }}
                    key={'1'}
                >Add</Button>
            );
        }
        if (this.props.update !== undefined) {
            botoes.push(
                <Button
                    onClick={() => {
                        this.props.update!(this.state.descendencia, this.props.descendencia) ?
                            this.props.handleHide() : this.handleInvalid()
                    }}
                    key={'2'}
                >update</Button>
            );
        }
        if (this.props.delete !== undefined) {
            botoes.push(
                <Button
                    onClick={() => this.props.delete!(this.state.descendencia) ?
                        this.props.handleHide() : this.handleInvalid()}
                    key={"3"}
                >delete</Button>
            );
        }
        return botoes;
    }

    tabDesc() {
        if (this.state.descendencia) {
            return (
                <Tab eventKey={"descDescendencia"} title={"Descrição"}>
                    <Row>
                        <Col>
                            {this.state.descendencia.descDescendencia}
                        </Col>
                    </Row>
                </Tab>
            )
        } else {
            return (
                <Tab eventKey={"descDescendencia"} title={"Descrição"} disabled={true}
                >empty</Tab>
            )
        }
    }

    tabHabilidade() {
        if (this.state.descendencia && this.state.descendencia.habilidades.length > 0) {
            return (
                <Tab eventKey={"habilidades"} title={"habilidades"}>
                    <Col>
                        {this.state.descendencia.habilidades.map((habilidade, index) => {
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
        if (this.state.descendencia && this.state.descendencia.habitos.length > 0)
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
                        {this.state.descendencia.habitos.map((habito, index) => {
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
}
