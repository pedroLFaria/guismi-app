import React, {FormEvent} from 'react'
import Form from "react-bootstrap/Form";
import Ficha from "../ficha/Ficha";
import Sistema from "../sistema/Sistema";
import Raca from "./Raca";
import {Button, Col, Modal, ModalBody, ModalFooter, Row, Tab, Table, Tabs} from "react-bootstrap";

interface Props {
    ficha: Ficha
    updateFicha: Function
}

interface State {
    sistema: Sistema
    raca: Raca
    show: boolean
}

class RacaApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            sistema: Sistema.sistema,
            raca: this.props.ficha.raca,
            show: false
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: FormEvent) {
        let value = (event.target as HTMLFormElement).value;
        let newRaca = Sistema.sistema.racas.find(raca => raca.idRaca!.toString() === value);
        if (newRaca) {
            this.setState({
                raca: newRaca
            })
        } else {
            alert("Ops Algo deu errado!")
        }
    }
    componentDidUpdate(prevProps: Props, prevState: State) {
        if (JSON.stringify(prevProps.ficha.raca) !== JSON.stringify(this.props.ficha.raca))
            this.setState({raca: this.props.ficha.raca})
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

    handleOnSave(){
        let newFicha = this.props.ficha;
        newFicha.idRaca = this.state.raca.idRaca!;
        newFicha.raca = this.state.raca;
        this.props.updateFicha(newFicha);
        this.setState({
            show:false
        })
    }

    render() {
        return (
            <div>
                <Button
                    variant={"light"}
                    block={true}
                    onClick={() => this.setState({
                        show: true,
                        raca: this.props.ficha.raca
                    })}
                >
                    {this.props.ficha.raca.nomeRaca}
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({show: false})}
                >
                    <Modal.Header closeButton>
                        <Form.Control
                            value={this.state.raca.idRaca? this.state.raca.idRaca.toString() : "0"}
                            as={"select"}
                            onChange={this.handleChange}
                        >
                            {this.state.sistema.racas.map(
                                (raca) => <option key={raca.idRaca} value={raca.idRaca}>{raca.nomeRaca}</option>
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
}

export {RacaApp}
