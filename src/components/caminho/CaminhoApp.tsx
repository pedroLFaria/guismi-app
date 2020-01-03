import * as React from "react";
import Caminho from "./Caminho";
import Sistema from "../sistema/Sistema";
import {Button, Col, FormControl, Modal, ModalBody, ModalFooter, Tab, Tabs} from "react-bootstrap";

interface Props {
    handleHide: Function
    caminho: Caminho
    show: boolean

    add?(newCaminho: Caminho): boolean

    update?(newCaminho: Caminho, prevCaminho: Caminho): boolean

    delete?(descendencia: Caminho): boolean
}

interface State {
    caminho: Caminho
    nivelCaminho: number
    isInvalid: boolean
}

export default class CaminhosApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            caminho: this.props.caminho,
            nivelCaminho: 1,
            isInvalid: false
        };
    }

    componentDidUpdate(prevProps: Readonly<Props>): void {
        if (!prevProps.show && this.props.show) {
            this.setState({
                caminho: this.props.caminho
            })
        }
    }

    handleInvalid() {
        this.setState({isInvalid: true});
        setTimeout(() => this.setState({isInvalid: false}), 1000)

    }

    handleChange(event: React.FormEvent) {
        const value = (event.target as HTMLSelectElement).value;
        let newCaminho = Sistema.caminhos.find(caminho => caminho.idCaminho === Number(value));
        if (newCaminho !== undefined)
            this.setState({
                caminho: Object.assign(newCaminho, {nivelCaminho:0}),
                isInvalid: false
            });
        else
            alert("Ops algo deu errado!")

    }

    render() {
        return (
            <Col>
                <Modal
                    show={this.props.show}
                    onHide={() => this.props.handleHide()}
                >
                    <Modal.Header closeButton>

                        <FormControl
                            value={this.state.caminho.idCaminho.toString()}
                            onChange={this.handleChange.bind(this)}
                            as={"select"}
                            isInvalid={this.state.isInvalid}
                        >
                            {Sistema.caminhos.map((caminho, index) =>
                                <option
                                    value={caminho.idCaminho.toString()}
                                    key={index}
                                >
                                    {caminho.nomeCaminho}
                                </option>
                            )}
                        </FormControl>

                    </Modal.Header>
                    <ModalBody>
                        <Tabs defaultActiveKey={"descCaminho"} id={"tab-caminho"}
                        >
                            {this.tabDesc()}
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        {this.renderBotoes()}
                    </ModalFooter>
                </Modal>
            </Col>
        )
    }

    renderBotoes() {
        let botoes = [];
        if (this.props.add !== undefined) {
            botoes.push(
                <Button
                    onClick={() => {
                        this.props.add!(Object.assign(this.state.caminho, {nivelCaminho:this.state.nivelCaminho})) ?
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
                        this.props.update!(this.state.caminho, this.props.caminho) ?
                            this.props.handleHide() : this.handleInvalid()
                    }}
                    key={'2'}
                >update</Button>
            );
        }
        if (this.props.delete !== undefined) {
            botoes.push(
                <Button
                    onClick={() => this.props.delete!(this.state.caminho) ?
                        this.props.handleHide() : this.handleInvalid()}
                    key={"3"}
                >delete</Button>
            );
        }
        return botoes;
    }

    tabDesc() {
        return (
            <Tab
                eventKey={"descCaminho"}
                title={"Descrição"}
            >
                {this.state.caminho.descCaminho}
            </Tab>
        )
    }
}
