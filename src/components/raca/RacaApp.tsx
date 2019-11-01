import React, {FormEvent} from 'react'
import Form from "react-bootstrap/Form";
import Sistema from "../sistema/Sistema";
import Raca from "./Raca";
import {Button, Col, Modal, ModalBody, ModalFooter, Row, Tab, Table, Tabs} from "react-bootstrap";

interface Props {
    raca: Raca

    updateRaca(raca: Raca): boolean
}

interface State {
    raca: Raca
    show: boolean
}

export default class RacaApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            raca: this.props.raca,
            show: false
        };
    }

    handleChange(event: FormEvent) {
        let value = (event.target as HTMLFormElement).value;
        let newRaca = Sistema.racas.find(raca => raca.idRaca!.toString() === value);
        if (newRaca) {
            this.setState({
                raca: newRaca
            })
        } else {
            alert("Ops Algo deu errado!")
        }
    }

    handleOnSave() {
        this.props.updateRaca(this.state.raca);
        this.handleOnHide()
    }

    handleOnHide() {
        this.setState({show: false})
    }

    handleOnClick() {
        this.setState({
            show: true,
            raca: this.props.raca
        })
    }

    render() {
        return (
            <div>
                <Button
                    variant={"light"}
                    block={true}
                    onClick={this.handleOnClick.bind(this)}
                >
                    {this.props.raca.nomeRaca}
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleOnHide.bind(this)}
                >
                    <Modal.Header closeButton>
                        <Form.Control
                            value={this.state.raca.idRaca ? this.state.raca.idRaca.toString() : "0"}
                            as={"select"}
                            onChange={this.handleChange.bind(this)}
                        >
                            {Sistema.racas.map((raca, index) =>
                                <option
                                    key={index}
                                    value={raca.idRaca}
                                >{raca.nomeRaca}</option>
                            )}
                        </Form.Control>
                    </Modal.Header>
                    <ModalBody>
                        <Tabs defaultActiveKey={"descRaca"} id={"tab-raca"}>
                            {this.tabDesc()}
                            {this.tabAtributos()}
                            {this.tabCultura()}
                            {this.tabHistoria()}
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleOnSave.bind(this)}>Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
            /**/
        )
    }

    tabDesc() {
        return (
            <Tab
                eventKey={"descRaca"}
                title={"Descrição"}
            >
                <Row>
                    <Col>
                        Raridade: {this.state.raca.raridadeRaca}
                    </Col>
                    <Col>
                        Longevidade: {this.state.raca.longevidadeRaca}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Descrição:
                        {this.state.raca.descRaca}
                    </Col>
                </Row>
            </Tab>
        )
    }

    tabCultura() {
        if (this.state.raca.culturaRaca) {
            return (
                <Tab title={"Cultura"} eventKey={"culturaRaca"}>
                    <Row>
                        <Col>
                            {this.state.raca.culturaRaca}
                        </Col>
                    </Row>
                </Tab>
            )
        }
    }

    tabHistoria() {
        if (this.state.raca.historiaRaca) {
            return (
                <Tab title={"História"} eventKey={"historiaRaca"}>
                    <Row>
                        <Col>
                            {this.state.raca.historiaRaca}
                        </Col>
                    </Row>
                </Tab>
            )
        } else
            return (
                <Tab title={"História"} disabled={true}>
                </Tab>
            )
    }

    tabAtributos() {
        return (
            <Tab title={"Atributos"} eventKey={"atributosRaca"}>
                <Row>
                    <Col>
                        <Table>
                            <tbody>
                            <tr>
                                <th>Sangue</th>
                                <td>{this.state.raca.sangue}</td>
                            </tr>
                            <tr>
                                <th>Vigor</th>
                                <td>{this.state.raca.vigor}</td>
                            </tr>
                            <tr>
                                <th>FOR</th>
                                <td>{this.state.raca.racaForca}</td>
                            </tr>
                            <tr>
                                <th>CON</th>
                                <td>{this.state.raca.racaConstituicao}</td>
                            </tr>
                            <tr>
                                <th>AGI</th>
                                <td>{this.state.raca.racaAgilidade}</td>
                            </tr>
                            <tr>
                                <th>DES</th>
                                <td>{this.state.raca.racaDestreza}</td>
                            </tr>
                            <tr>
                                <th>INT</th>
                                <td>{this.state.raca.racaInteligencia}</td>
                            </tr>
                            <tr>
                                <th>SAB</th>
                                <td>{this.state.raca.racaSabedoria}</td>
                            </tr>
                            <tr>
                                <th>CAR</th>
                                <td>{this.state.raca.racaCarisma}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Tab>
        )
    }
}
