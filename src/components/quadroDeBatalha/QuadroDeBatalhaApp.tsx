import * as React from 'react'
import Ficha from '../ficha/Ficha';

interface Props{
    ficha:Ficha
}

interface State{
    fichaBatalha:Ficha
}

export default class QuadroDeBatalhaApp extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state = {fichaBatalha:this.props.ficha}
    }
    ws = new WebSocket('ws://localhost:9000/chat/1')
    
    componentDidMount(){
        const k = {user:"teste",action:"JOINED", message:"xuxa"}
        this.ws.onopen=()=>{
            console.log('WebSocket Client Connected');
            this.ws.send(JSON.stringify(k));
        };
        this.ws.onmessage = (message) => {
            console.log(message);
          };
          
    }


    render(){
        
        return <p>Estou tentando ao menos.</p>
    }
}