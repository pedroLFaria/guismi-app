import React from "react";
import {userService} from "../_services";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

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
        const {id, value} = e.target;
        this.setState({[id]: value});
    }

    handleSumit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        userService.login(username, password).then(
            user => {
                console.log(user);
                window.location.hash = ("#/escolhe_ficha");
            },
            error => this.setState({error, loading: false})
        );
        window.location.hash = ("#/escolhe_ficha");
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSumit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label column={false}>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" id={"username"}
                                      onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label column={false}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id={"password"}
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export {LoginPage}
