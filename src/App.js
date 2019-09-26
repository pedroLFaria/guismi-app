import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter ,Route } from 'react-router-dom';

import {LoginPage} from "./login";
import {EscolheFicha} from "./escolheFicha";
import {TestePage} from "./teste";

class App extends React.Component{
    render() {
        return(
            <div>
                <HashRouter hashType={"noslash"}>
                    <Route path={"//"} component={LoginPage}/>
                    <Route path={"/teste"} component={TestePage}/>
                    <Route path={"/escolhe_ficha"} component={EscolheFicha}/>
                </HashRouter>
                {/*<Router>
                    <Route path={"/index.html"} component={LoginPage}/>
                    <Route path={"/escolhe_ficha.html"} component={EscolheFicha}/>
                </Router>*/}
            </div>
        )
    }
}

export default App;
