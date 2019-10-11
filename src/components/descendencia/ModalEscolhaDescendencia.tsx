import React from "react";
import Descendencia from "./Descendencia";
import {Button, FormControl, Modal} from "react-bootstrap";
import Container from 'react-bootstrap/Container'

interface Props {
    descendencias: Descendencia[],
    descendenciaEscolhida: Function
}

interface State {
    modalCriacShow:boolean
}

export default class ModalEscolhaDescendencia extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Button
                    size={"sm"} variant="outline-info"
                    onClick={() => this.setState({modalCriacShow: true})}
                >+</Button>
                <Modal>
                    <Modal.Header>
                        <FormControl
                            value={"0"}
                            as={"select"}
                            plaintext={true}
                            onChange={(e) => {
                                let value = (e.target as HTMLFormElement).value;
                                this.setState(state => {
                                    let descendenciaSelecionada = this.props.descendencias.find(function (descendencia) {
                                        return descendencia.idDescendencia === value
                                    });
                                    return {
                                        descendenciaSelecionada: descendenciaSelecionada
                                    }
                                })
                            }}
                        >
                            <option value={"0"}></option>
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
