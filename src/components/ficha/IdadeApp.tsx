import * as React from "react";
import Ficha from "./Ficha";
import {Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";

interface Props {
    ficha: Ficha
}

interface State {
    ficha: Ficha,
    readonly: boolean
}

export default class IdadeApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            readonly: true
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.ficha.idade !== this.props.ficha.idade)
            this.setState({
                ficha: this.props.ficha
            })
    }

    render() {
        return (
            <FormGroup as={Row}>
                <Col lg={"auto"}>
                    <Form.Label column={false}>Idade</Form.Label>
                </Col>
                <Col>
                    <FormControl
                        as={'input'}
                        type={"number"}
                        plaintext={true}
                        readOnly={this.state.readonly}
                        value={this.state.ficha.idade.toString()}
                        onDoubleClick={()=>this.setState({readonly:false})}
                        onBlur={()=>this.setState({readonly:true})}
                        onChange={(e)=>{
                            let value = (e.target as HTMLInputElement).value;
                            this.setState(state=> {
                                state.ficha.idade = Number(value);
                            return {
                                ficha: state.ficha
                            }
                        })}}
                    />
                </Col>
            </FormGroup>
        )
    }
}
