import * as React from "react";
import Caminho from "./Caminho";
import Form from "react-bootstrap/Form";
import Sistema from "../sistema/Sistema";
import { Button, Tab } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ModalBody } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Row } from "react-bootstrap";

interface Props {
    caminho: Caminho,
    updateCaminhos(arg0: number, arg1: Caminho): boolean
}

interface State {
    caminho: Caminho,
    caminhosSistema: Caminho[],
    show: boolean
}

export default class CaminhosApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            caminho: this.props.caminho,
            caminhosSistema: Sistema.sistema.caminhos,
            show: false
        };
    }

    handleChange(event: React.FormEvent) {
        const value = (event.target as HTMLSelectElement).value;
        this.setState(state => {
            let newCaminho = Sistema.sistema.caminhos.find(caminho => caminho.idCaminho.toString() === value)
            if (newCaminho) {
                this.setState({
                    caminho: newCaminho
                })
            } else {
                alert("Ops algo deu errado!")
            }
        });
    }

    tabDesc() {
        return (
            <Tab
                eventKey={"descCaminho"}
                title={"Descrição"}
            >
                <Row>
                    <Col>
                        {this.state.caminho.descCaminho}
                    </Col>
                </Row>
            </Tab>
        )
    }

    render() {
        return (
            <Col>
                <Button
                    variant={"light"}
                    block
                    onClick={() => this.setState({
                        show: true,
                        caminho: this.props.caminho
                    })}
                >
                    {this.props.caminho.nomeCaminho}
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                >
                    <Modal.Header closeButton>
                        <Form.Control
                            value={this.state.caminho.idCaminho ? this.state.caminho.idCaminho.toString() : "0"}
                            as={"select"}
                            onChange={this.handleChange.bind(this)}
                        >
                            {Sistema.sistema.caminhos.map(
                                (caminho, index) =>
                                    <option
                                        key={index}
                                        value={caminho.idCaminho}
                                    >
                                        {caminho.nomeCaminho}
                                    </option>
                            )}
                        </Form.Control>
                    </Modal.Header>
                    <ModalBody>
                        <Tabs
                            defaultActiveKey={"descCaminho"}
                            id={"tab-caminho"}
                        >
                            {this.tabDesc()}
                        </Tabs>
                    </ModalBody>
                </Modal>
            </Col>
            /*
            <Form.Control
                as={"select"}
                value={this.state.caminho.idCaminho.toString()}
                onChange={this.handleChange.bind(this)}>
                {this.state.caminhosSistema.map((caminhoSistema, index) => {
                    return (
                        <option key={index} value={caminhoSistema.idCaminho}>
                            {caminhoSistema.nomeCaminho}
                        </option>
                    )
                })}
            </Form.Control>*/
        )
    }
}