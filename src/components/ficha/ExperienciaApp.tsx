import React, { FormEvent } from "react";
import Ficha from "./Ficha";
import { Col, Form, FormGroup, Row } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { ifStatement } from "@babel/types";

interface Props {
    ficha: Ficha
    updateFicha(arg0: Ficha): void
}
interface State {
    expPersonagem: number,
    readonly: boolean
}
export default class ExperienciaApp extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            expPersonagem: this.props.ficha.expPersonagem,
            readonly: true
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.ficha.expPersonagem !== this.props.ficha.expPersonagem)
            this.setState({
                expPersonagem: this.props.ficha.expPersonagem
            })
    }

    handleOnChange(event: FormEvent) {
        let value = (event.target as HTMLInputElement).value
        this.setState({
            expPersonagem: Number(value)
        })
    }

    handleOnBlur() {
        this.setState({
            readonly: true
        })
        if (this.state.expPersonagem !== this.props.ficha.expPersonagem) {
            let ficha = this.props.ficha
            ficha.expPersonagem = this.state.expPersonagem
            this.props.updateFicha(ficha);
        }
    }

    render() {
        return (
            <FormGroup as={Row}>
                <Form.Label column={true} sm={2}>Exp</Form.Label>
                <Col>
                    <FormControl
                        as={'input'}
                        type={'number'}
                        value={this.state.expPersonagem.toString()}
                        readOnly={this.state.readonly}
                        plaintext={this.state.readonly}
                        onDoubleClick={() => this.setState({ readonly: false })}
                        onChange={this.handleOnChange.bind(this)}
                        onBlur={this.handleOnBlur.bind(this)}
                    />
                </Col>
            </FormGroup>
        )
    }
}
