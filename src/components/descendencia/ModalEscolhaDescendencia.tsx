import React from "react";
import Descendencia from "./Descendencia";
import { Button, FormControl, Modal, ModalBody, Col, Tabs, Tab, Table } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Sistema from "../sistema/Sistema";

interface Props {
    descendencias: Descendencia[]
    descendenciaEscolhida: Function
}

interface State {
    modalCriacShow: boolean,
    descendenciaSelecionada: Descendencia,
    value: string
}

export default class ModalEscolhaDescendencia extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            modalCriacShow: false,
            descendenciaSelecionada: Sistema.sistema.descendencias[0],
            value: "0"
        }
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
        }
        else
            return (
                <Tab eventKey={"habilidades"} title={"habilidades"} disabled={true}></Tab>
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
            )
        else
            return (
                <Tab eventKey={"habitos"} title={"habitos"} disabled={true}></Tab>
            )
    }

    render() {
        return (
            <div>
                <Button
                    size={"sm"} variant="outline-info"
                    onClick={() => this.setState({ modalCriacShow: true })}
                >+</Button>
                <Modal
                    show={true}
                    onHide={() => this.setState({ modalCriacShow: false })}
                    size={"lg"}
                >
                    <Modal.Header>
                        <FormControl
                            value={this.state.value}
                            as={"select"}
                            plaintext={true}
                            onChange={(e) => {
                                let value = (e.target as HTMLFormElement).value;
                                this.setState(state => {
                                    let descendenciaSelecionada = this.props.descendencias.find(function (descendencia) {
                                        return descendencia.idDescendencia.toString() === value
                                    });
                                    descendenciaSelecionada = descendenciaSelecionada ? descendenciaSelecionada : state.descendenciaSelecionada
                                    return {
                                        descendenciaSelecionada: descendenciaSelecionada,
                                        value: descendenciaSelecionada!.idDescendencia.toString()
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
                            <Tab eventKey={"descDescendencia"} title={"Descrição"}>
                                <Row>
                                    {this.state.descendenciaSelecionada.descDescendencia}
                                </Row>
                            </Tab>
                            {this.tabHabilidade()}
                            {this.tabHabitos()}
                        </Tabs>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

/**                <Modal
 size="lg"
 show={this.state.modalCriacShow}
 onHide={() => this.setState({ modalCriacShow: false })}
 >
 <Modal.Header>
 <ModalTitle>
 <FormControl
 value={"0"}
 as={"select"}
 plaintext={true}
 onChange={(e) => {
                                       let value = (e.target as HTMLFormElement).value;
                                       this.setState(state => {
                                           let descendenciaSelecionada = this.state.sistema.descendencias.find(function (descendencia) {
                                               return descendencia.idDescendencia == value
                                           })
                                           return {
                                               descendenciaSelecionada: descendenciaSelecionada
                                           }
                                       })
                                   }}
 >
 <option value={"0"}> </option>
 {this.state.sistema.descendencias.map((descendencia, index) => {
                                       return (
                                           <option value={descendencia.idDescendencia}
                                               key={index}
                                           >
                                               {descendencia.nomeDescendencia}
                                           </option>)
                                   })}
 </FormControl>
 </ModalTitle>
 </Modal.Header>
 <ModalBody>
 <Row>

 </Row>
 <Row>
 <Col>
 <Row>
 Descrição
 </Row>
 <Row>
 {this.state.descendenciaSelecionada ? this.state.descendenciaSelecionada.descDescendencia : ""}
 </Row>
 </Col>
 <Col>Habilidades:
 {this.state.descendenciaSelecionada?this.state.descendenciaSelecionada.habilidades.map((habilidade, index) => {
                                   return (
                                       <Row key={index}>{habilidade.nomeHabilidade}</Row>
                                   )
                               }):""}</Col>
 <Col>
 {this.state.descendenciaSelecionada?this.state.descendenciaSelecionada.habitos.map((habito, index) => {
                                       return (
                                           <p>{habito.nomeHabito}</p>
                                       )
                                   }):""}
 </Col>
 </Row>
 </ModalBody>
 </Modal>
 */
