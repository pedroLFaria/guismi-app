import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter ,Route } from 'react-router-dom';

import {LoginPage} from "./login";
import {EscolheFicha} from "./escolheFicha";
import {FichaPersonagem} from "./personagem";

class App extends React.Component{
    render() {
        return(
            <div>
                <HashRouter hashType={"noslash"}>
                    <Route path={"/"} exact={true} component={LoginPage}/>
                    <Route path={"/escolhe_ficha"} component={EscolheFicha}/>
                    <Route path={"/ficha"} component={FichaPersonagem}/>
                </HashRouter>
            </div>
        )
    }
}

export default App;
