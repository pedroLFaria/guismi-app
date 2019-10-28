import * as React from "react";
import Habito from './Habito';
import Especializacao from "../especializacao/Especializacao";

interface Props{
    habito: Habito
    especializacao: Especializacao
}

interface State{
    show: boolean

}

export default class HabitoApp extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state={
            show:false
        }
    }

    render(){
        return (
            <p>W</p>
        )
    }
}