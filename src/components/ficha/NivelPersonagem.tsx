import React, {FormEvent} from "react";
import Ficha from "./Ficha";
import FormControl from "react-bootstrap/FormControl";
import {Col, Form, FormGroup, Row} from "react-bootstrap";

interface Props {
    ficha: Ficha,
    updateFicha(arg0:Ficha):void
}

interface State {
    nivelPersonagem:number
    readonly: boolean
}

export default class NivelPersonagem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nivelPersonagem:this.props.ficha.nivelPersonagem,
            readonly: true
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.ficha.nivelPersonagem !== this.props.ficha.nivelPersonagem)
            this.setState({
                nivelPersonagem: this.props.ficha.nivelPersonagem
            })
    }

    handleDoubleClick(){
        this.setState({
            readonly:false
        })
    }

    handleBlur(){
        let newFicha = this.props.ficha;
        newFicha.nivelPersonagem = this.state.nivelPersonagem;
        this.props.updateFicha(newFicha);
        this.setState({
            readonly:true
        });
    }

    handleChange(event: FormEvent){
        let value = (event.target as HTMLInputElement).value;
        this.setState({
            nivelPersonagem:Number(value)
        })
    }

    render(){
        return (
            <FormGroup as={Row} >
                <Form.Label column={true} sm={2}>Nivel</Form.Label>
                <Col>
                    <FormControl
                        as={'input'}
                        type={'number'}
                        value={this.state.nivelPersonagem.toString()}
                        readOnly={this.state.readonly}
                        plaintext={this.state.readonly}
                        onDoubleClick={this.handleDoubleClick.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                        onChange={this.handleChange.bind(this)}
                    />
                </Col>
            </FormGroup>
        )
    }
}
