import React from "react";
import {userService} from "../_services";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSumit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        userService.login(username, password).then(
            user => {
                window.location.hash = ("#/escolhe_ficha");
            },
            error => this.setState({error, loading: false})
        );
        window.location.hash = ("#/escolhe_ficha");
    }

    render() {
        return (
            <Container>
            <Row className="d-flex justify-content-center">
              <Col md={5}>
                <Form onSubmit={this.handleSumit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label column={false}>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name={"username"}
                                      onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label column={false}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name={"password"}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Aceder
                    </Button>
                </Form>
              </Col>
            </Row>
            </Container>
        )
    }
}

export {LoginPage}
