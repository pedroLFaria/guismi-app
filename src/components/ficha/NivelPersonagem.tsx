import React from "react";
import Ficha from "./Ficha";
import FormControl from "react-bootstrap/FormControl";
import {Col, Form, FormGroup, Row} from "react-bootstrap";

interface Props {
    ficha: Ficha
}

interface State {
    ficha: Ficha,
    readonly: boolean
}

export default class NivelPersonagem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            readonly: true
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.ficha.nivelPersonagem !== this.props.ficha.nivelPersonagem)
            this.setState({
                ficha: this.props.ficha
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
                        value={this.state.ficha.nivelPersonagem.toString()}
                        readOnly={this.state.readonly} plaintext={this.state.readonly}
                    />
                </Col>
            </FormGroup>
        )
    }
}
