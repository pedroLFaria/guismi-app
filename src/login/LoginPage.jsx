import React from "react";
import {userService} from "../_services";

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            submitted:false,
            loading:false,
            error:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
    }
    handleChange(e){
        const{name, value} = e.target;
        this.setState({[name]:value})
    }

    handleSumit(e){
        e.preventDefault();
        this.setState({submitted:true});
        const {username, password} = this.state;
        userService.login(username, password).then(user => {
                this.props.history.push("#/escolhe_ficha");
            },
            error => this.setState({ error, loading: false })
        )
    }

    render() {
        return (
            <div className="App container">
                <form id="form" onSubmit={this.handleSumit}>
                    <label>Username</label>
                    <input type="text" id="username" onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    <button className="button">Sign In</button>
                </form>
            </div>
        )}
}
export {LoginPage}
