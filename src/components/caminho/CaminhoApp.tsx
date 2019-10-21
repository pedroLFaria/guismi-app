import * as React from "react";
import Caminho from "./Caminho";
import Sistema from "../sistema/Sistema";
import { Button, Col, FormControl, Modal, ModalBody, ModalFooter, Row, Tab, Tabs } from "react-bootstrap";

interface Props {
    caminhos: Caminho[]
    index: number
    show:boolean
    updateCaminhos(index: number, newCaminho: Caminho): boolean
    addCaminho(newCaminho: Caminho): boolean
    deleteCaminho(index: number): boolean
}

interface State {
    caminho: Caminho
    show: boolean
    isInvalid: boolean
}

export default class CaminhosApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            caminho: this.props.caminhos[this.props.index],
            show: this.props.show,
            isInvalid: false
        };
    }

    componentDidUpdate(prevProps: Readonly<Props>): void {
        if(prevProps.show !== this.props.show)
            this.setState({show:this.props.show})
    }

    handleChange(event: React.FormEvent) {
        const value = (event.target as HTMLSelectElement).value;
        let newCaminho = Sistema.caminhos.find(caminho => caminho.idCaminho.toString() === value);
        if (newCaminho) {
            this.setState({
                caminho: newCaminho,
                isInvalid: false
            })
        } else {
            alert("Ops algo deu errado!")
        }
    }

    handleOnSave() {
        if (this.props.updateCaminhos(this.props.caminhos[this.props.index].idCaminho, this.state.caminho)) {
            this.setState({
                show: false
            })
        } else {
            this.setState({
                isInvalid: true
            })
        }
    }

    render() {
        return (
            <Col>

                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                >
                    <Modal.Header closeButton>
                        <FormControl
                            value={this.state.caminho.idCaminho ? this.state.caminho.idCaminho.toString() : "0"}
                            as={"select"}
                            onChange={this.handleChange.bind(this)}
                            isInvalid={this.state.isInvalid}
                        >
                            {Sistema.caminhos.map(
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
                        <Button onClick={this.handleOnSave.bind(this)}>Add</Button>
                        <Button onClick={this.handleOnSave.bind(this)}>Save</Button>
                        <Button onClick={this.handleOnSave.bind(this)}>Del</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        )
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
