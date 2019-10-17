import * as React from "react";
import Caminho from "./Caminho";
import Form from "react-bootstrap/Form";
import Sistema from "../sistema/Sistema";
import {Button, Col, FormControl, Modal, ModalBody, ModalFooter, Row, Tab, Tabs} from "react-bootstrap";

interface Props {
    caminho: Caminho,

    updateCaminhos(arg0: number, arg1: Caminho): boolean
}

interface State {
    caminho: Caminho,
    caminhosSistema: Caminho[],
    show: boolean
    isInvalid:boolean
}

export default class CaminhosApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            caminho: this.props.caminho,
            caminhosSistema: Sistema.sistema.caminhos,
            show: false,
            isInvalid:false
        };
    }

    handleChange(event: React.FormEvent) {
        const value = (event.target as HTMLSelectElement).value;
        let newCaminho = Sistema.sistema.caminhos.find(caminho => caminho.idCaminho.toString() === value);
        if (newCaminho) {
            this.setState({
                caminho: newCaminho,
                isInvalid:false
            })
        } else {
            alert("Ops algo deu errado!")
        }
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

    tabEspecializacao() {
        if (this.state.caminho.especializacoes)
            return (
                <Tab
                    eventKey={"especCaminho"}
                    title={"Especializações"}
                >
                    <Row>
                        <Col>
                            {this.state.caminho.especializacoes.map(especializacao => {
                                return (
                                    <Row>
                                        {especializacao.nomeEspecializacao}
                                    </Row>
                                )
                            })}
                        </Col>
                    </Row>
                </Tab>
            );
        else {
            return (
                <Tab
                    eventKey={"especCaminho"}
                    title={"Especializações"}
                    disabled={true}
                >Não tem</Tab>)
        }
    }

    handleOnSave() {
        if(this.props.updateCaminhos(this.props.caminho.idCaminho, this.state.caminho)){
            this.setState({
                show:false
            })
        }else{
            this.setState({
                isInvalid:true
            })
        }
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
                    onHide={() => this.setState({show: false})}
                >
                    <Modal.Header closeButton>
                        <FormControl
                            value={this.state.caminho.idCaminho ? this.state.caminho.idCaminho.toString() : "0"}
                            as={"select"}
                            onChange={this.handleChange.bind(this)}
                            isInvalid={this.state.isInvalid}
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
                        </FormControl>
                    </Modal.Header>
                    <ModalBody>
                        <Tabs
                            defaultActiveKey={"descCaminho"}
                            id={"tab-caminho"}
                        >
                            {this.tabDesc()}
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleOnSave.bind(this)}>Save</Button>
                    </ModalFooter>
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
