import React from "react";
import Ficha from "./Ficha";
import FormControl from "react-bootstrap/FormControl";
import {Form, FormGroup} from "react-bootstrap";

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

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <FormGroup>
                <Form.Label>Nivel</Form.Label>
                <FormControl
                    as={'input'}
                    type={'number'}
                    value={this.state.ficha.nivelPersonagem.toString()}
                    readOnly={this.state.readonly} plaintext={this.state.readonly}
                />
            </FormGroup>
        )
    }
}
