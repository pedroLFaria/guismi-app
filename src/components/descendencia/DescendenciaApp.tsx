import React, {FormEvent} from "react";
import Descendencia from "./Descendencia";
import {Button, Col, FormControl, Modal, ModalBody, Row, Tab, Table, Tabs} from "react-bootstrap";
import Sistema from "../sistema/Sistema";

interface Props {
    updateDescendencia: Function
    index: number
    descendencias: Descendencia[]
    buttonIcon: String
    buttonText: String
}

interface State {
    show: boolean
    descendencia?: Descendencia
    value: string
    isInvalid: boolean
}

export default class DescendenciaApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            show: false,
            descendencia: this.props.descendencias[this.props.index],
            value: this.props.index.toString(),
            isInvalid: false
        }
    }

    handleChange(event: FormEvent) {
        let value = (event.target as HTMLFormElement).value;
        let isInvalid = !this.props.descendencias.some(descendencia => descendencia.idDescendencia === Number(value));
        this.setState({
            descendencia: Sistema.descendencias[value],
            value: value,
            isInvalid: isInvalid
        })
    }

    render() {
        console.log(Sistema.sistema);
        return (
            <div>
                <Button
                    size={"sm"}
                    variant="outline-info"
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
                            onChange={this.handleChange.bind(this)}
                        >
                            {Sistema.descendencias.map((descendencia, index) => {
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
                            <Button
                                variant="outline-info"
                                onClick={() => {
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
        }else{
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
