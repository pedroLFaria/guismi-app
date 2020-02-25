import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {EscolheFicha} from "./escolheFicha/EscolheFicha";
import FichaPersonagem from "./personagem/FichaPersonagem";
import Login from "./login/Login";
import PrivateRoute from './privateRoute/PrivateRoute';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                        <PrivateRoute path={"/"} exact={true} component={EscolheFicha}/>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/escolhe_ficha"} component={EscolheFicha}/>
                        <Route path={"/ficha"} component={FichaPersonagem}/>
                        <Route path={"/registro_do_sistema"} component={FichaPersonagem}/>
                </Router>
            </div>
        )
    }
}

export default App;
