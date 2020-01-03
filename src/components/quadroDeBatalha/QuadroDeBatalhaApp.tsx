import * as React from 'react';
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
}

interface Interface {

}

export default class QuadroDeBatalhaApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            fichaBatalha: this.props.ficha,
            messages: []
        }
    }

    ws = new WebSocket('ws://ec2-18-228-37-245.sa-east-1.compute.amazonaws.com/chat/1');

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('WebSocket Client Conneted');
            console.log(this.ws.send(JSON.stringify({user: "teste", type: "DICE", message: "1d100"})));
        };
        this.ws.onmessage = (message) => {
            console.log(message);
            this.addMessage(message.data);
        };
    }

    addMessage(message: string) {
        console.log(this.state.messages)
        this.setState(state => ({messages: state.messages.concat(message)}));
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    {this.state.messages.map((message, index) => {
                            let objMessage = JSON.parse(message);
                            return (<Row
                                    key={index}>
                                    <strong> {objMessage.user}: </strong>
                                    <em>{objMessage.message}</em>
                                </Row>
                            )
                        }
                    )}
                </Col>
            </Row>
            <Row>
                <FormControl
                    type={"textarea"}
                    onKeyUp={(e:any)=>{console.log(e)}}
                />
                <button
                    onClick={() => this.ws.send(JSON.stringify({user: "teste", type: "MESSAGE", message: "xuxa"}))}>send
                </button>
            </Row>
        </Container>
    }
}
