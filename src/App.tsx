import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {EscolheFicha} from "./escolheFicha/EscolheFicha";
import FichaPersonagem from "./personagem/FichaPersonagem";
import Login from "./login/Login";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path={"/"} exact={true} component={Login}/>
                        <Route path={"/escolhe_ficha"} component={EscolheFicha}/>
                        <Route path={"/ficha"} component={FichaPersonagem}/>
                        <Route path={"/registro_do_sistema"} component={FichaPersonagem}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
