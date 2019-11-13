import * as React from "react";
import {FormEvent} from "react";
import {userService} from "../_services";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MyHeaders from "../_services/MyHeaders";
import FormControl from "react-bootstrap/FormControl";

interface Props {

}

interface State {
    username: String,
    password: String,
    loading: boolean,
    error: boolean
}

export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
            error: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
    }

    handleChange(event: FormEvent) {
        const {name, value} = event.target as HTMLInputElement;
        this.setState((prevState) => {
            if (name === "password")
                return {password: value, username: prevState.username};
            else
                return {password: prevState.password, username: value}
        });
    }

    handleSumit(e: FormEvent) {
        e.preventDefault();
        this.setState({loading: true});
        const {username, password} = this.state;
        userService.login(username, password).then(()=>{
            this.setState({loading: false});
            window.location.hash = ("#/escolhe_ficha")
        });
		this.setState({loading: false});
        window.location.hash = ("#/escolhe_ficha")
    }

    render() {
        return (
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={5}>
                        <Form onSubmit={this.handleSumit}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label column={false}>Username</Form.Label>
                                <FormControl as={"input"} type="text" placeholder="Enter username" name={"username"}
                                             onChange={this.handleChange} disabled={this.state.loading}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label column={false}>Password</Form.Label>
                                <Form.Control as={"input"} type="password" placeholder="Password" name={"password"}
                                              onChange={this.handleChange} disabled={this.state.loading}/>
                            </Form.Group>
                            <Button variant="outline-success" type="submit" disabled={this.state.loading}>
                                Aceder
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export {Login}
