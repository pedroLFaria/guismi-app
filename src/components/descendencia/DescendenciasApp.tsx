import React from "react";
import {Button, Col, Form, Row, Container} from "react-bootstrap";
import Descendencia from "./Descendencia";
import DescendenciaApp from "./DescendenciaApp";
import "./DescendenciasApp.css"
import Sistema from "../sistema/Sistema";

interface Props {
    descendencias: Descendencia[]
    updateDescendencias(descendencias: Descendencia[]):boolean
}

interface State {
    show:boolean[]
    showPlus:boolean
}

export default class DescendenciasApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            show:[],
            showPlus:false
        };
    }

    updateDescendencia(novaDescendencia: Descendencia, prevDescendencia: Descendencia) {
        let descendencias = this.props.descendencias;
        descendencias[this.findIndexDescendencia(prevDescendencia, descendencias)] = novaDescendencia;
        return this.props.updateDescendencias(descendencias);
    }

    addDescendencia(newDescendencia: Descendencia) {
        let descendencias = this.props.descendencias;
        descendencias.push(newDescendencia);
        return this.props.updateDescendencias(descendencias);
    }

    deleteDescendencia(descendencia:Descendencia){
        let descendencias = this.props.descendencias;
        descendencias.splice(this.findIndexDescendencia(descendencia, descendencias), 1);
        return  this.props.updateDescendencias(descendencias);
    }

    findIndexDescendencia(descendencia:Descendencia, descendencias:Descendencia[]){
        return descendencias.findIndex(elementDescendencia =>
            elementDescendencia.idDescendencia === descendencia.idDescendencia)
    }

    /*handleHide(){
        this.setState({show:false})
    }

    /*handleShow(){
        this.setState({show:true})
    }*/

    render() {
        const descendencias = this.props.descendencias;
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Label column={false}>
                            Descendencias
                        </Form.Label>
                    </Col>
                    <Col>
                        <Button
                            onClick={()=>this.setState({showPlus:true})}
                        >+</Button>
                        <DescendenciaApp
                            descendencia={Sistema.descendencias[0]}
                            add={this.addDescendencia.bind(this)}
                            show={this.state.showPlus}
                            handleHide={()=>this.setState({showPlus:false})}
                        />
                    </Col>
                </Row>
                {descendencias.map((descendencia, index) => {
                        return (
                            <Row key={index}>
                                <Button
                                    variant={"light"}
                                    block
                                    onClick={()=>this.setState(state=>{
                                        state.show[index] = true;
                                        return{ show: state.show }
                                    })}
                                >
                                    {descendencia.nomeDescendencia}
                                </Button>
                                <Col md={"auto"}>
                                    <DescendenciaApp
                                        descendencia={descendencia}
                                        show={this.state.show[index]}
                                        update={this.updateDescendencia.bind(this)}
                                        add={this.addDescendencia.bind(this)}
                                        delete={this.deleteDescendencia.bind(this)}
                                        handleHide={()=>this.setState(state=>{
                                            state.show[index] = false;
                                            return{show:state.show}
                                        })}
                                    />
                                </Col>
                                <Col md style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <Button
                                        size={"sm"} variant="outline-danger"
                                        onClick={()=>this.deleteDescendencia(descendencia)}
                                    >&#10005;</Button>
                                </Col>
                            </Row>
                        )
                    }
                )}
            </Container>
        );
    }
}
