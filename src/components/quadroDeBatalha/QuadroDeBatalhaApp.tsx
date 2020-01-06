import * as React from 'react';
import {FormEvent} from 'react';
import Ficha from '../ficha/Ficha';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
    ficha: Ficha
}

interface State {
    fichaBatalha: Ficha
    messages: string[]
    message: string
}

export default class QuadroDeBatalhaApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fichaBatalha: this.props.ficha,
            messages: [],
            message: ""
        }
    }

    ws = new WebSocket('ws://ec2-18-228-37-245.sa-east-1.compute.amazonaws.com/chat/1');

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('WebSocket Client Conneted');
        };
        this.ws.onmessage = (message) => {
            this.addMessage(message.data);
        };
    }

    addMessage(message: string) {
        this.setState(state => ({messages: state.messages.concat(message)}));
    }

    handleChange(event: FormEvent) {
        this.setState({message: (event.target as HTMLInputElement).value})
    }

    handleOnClick() {
        let message = this.state.message;
        if (/(\\r [0-9]{1,}d[0-9]{1,})/.test(message.replace(/\s\s+/, ' '))) {
            this.ws.send(JSON.stringify({
                type: "DICE", message: message.replace(/\s\s+/, ' ').split(' ')[1]
            }))
        } else {
            this.ws.send(JSON.stringify({type: "MESSAGE", message: message}))
        }
        this.setState({message: ""})
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    {this.state.messages.map((message, index) => {
                            let objMessage = JSON.parse(message);
                            return (<Row
                                    key={index}>
                                    <strong>{objMessage.user}: </strong>
                                    <em>{objMessage.message}</em>
                                </Row>
                            )
                        }
                    )}
                </Col>
            </Row>
            <Row>
                <FormControl
                    as={"input"}
                    type={"textarea"}
                    value={this.state.message}
                    onKeyUp={(event:any)=>{console.log(event.key)}}
                    onChange={this.handleChange.bind(this)}
                />
                <button
                    onClick={this.handleOnClick.bind(this)}>send
                </button>
            </Row>
        </Container>
    }
}
