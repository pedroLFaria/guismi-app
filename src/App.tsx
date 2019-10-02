import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {LoginPage} from "./login";
import {EscolheFicha} from "./escolheFicha";
import {FichaPersonagem} from "./personagem";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path={"/"} exact={true} component={LoginPage}/>
                        <Route path={"/escolhe_ficha"} component={EscolheFicha}/>
                        <Route path={"/ficha"} component={FichaPersonagem}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
