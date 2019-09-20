import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {LoginPage} from "./login";
import {EscolheFicha} from "./escolheFicha";

class App extends React.Component{
    render() {
        return(
            <div>
                <Router>
                    <Route path={"/index.html"} component={LoginPage}/>
                    <Route path={"/escolhe_ficha.html"} component={EscolheFicha}/>
                </Router>
            </div>
        )
    }
}

export default App;
