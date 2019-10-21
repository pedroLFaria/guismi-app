import * as React from "react";
import Ficha from "./Ficha";
import {Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {FormEvent} from "react";

interface Props {
    ficha: Ficha
    updateFicha: Function
}

interface State {
    readonly: boolean
    idade: number
}

export default class IdadeApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            readonly: true,
            idade:this.props.ficha.idade
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.ficha.idade !== this.props.ficha.idade)
            this.setState({
                idade: this.props.ficha.idade
            })
    }

    handleChange(event:FormEvent){
        let value = (event.target as HTMLInputElement).value;
        this.setState({
            idade:Number(value)
        })
    }

    handleBlur(){
        let ficha = this.props.ficha;
        ficha.idade = this.state.idade;
        this.props.updateFicha(ficha);
        this.setState({
            readonly:true
        })
    }

    render() {
        return (
            <FormGroup as={Row}>
                <Col lg={"auto"}>
                    <Form.Label column={true} sm={2}>Idade</Form.Label>
                </Col>
                <Col>
                    <FormControl
                        as={'input'}
                        type={"number"}
                        plaintext={true}
                        readOnly={this.state.readonly}
                        value={this.state.idade.toString()}
                        onDoubleClick={() => this.setState({readonly: false})}
                        onBlur={this.handleBlur.bind(this)}
                        onChange={this.handleChange.bind(this)}
                    />
                </Col>
            </FormGroup>
        )
    }
}
