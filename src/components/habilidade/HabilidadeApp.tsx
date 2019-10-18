import React from "react"
import Habilidade from "./Habilidade"
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"

interface Props{
    habilidade:Habilidade
    updateHabilidades(prevHabilidade:Habilidade, newHabilidade:Habilidade):boolean
}

interface State{
    habilidade:Habilidade
}

export default  class HabilidadeApp extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state={
            habilidade:this.props.habilidade
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>){
        if(JSON.stringify(prevProps.habilidade) !==
         JSON.stringify(this.props.habilidade)){
            this.setState({
                habilidade:this.props.habilidade
            })
        }
    }

    render(){
        const habilidade = this.state.habilidade
        return(
            <Container>
                <Row>
                    {habilidade.descHabilidade}
                </Row>{/*
                <Row>
                    {habilidade.acoes.}
                </Row>
                <Row>
                    {habilidade.gasto}
                </Row>
                <Row>
                    {habilidade.nivelRequerido}
                </Row>
                <Row>
                    {habilidade.prerequisito}
                </Row>
                <Row>
                    {habilidade.tipoHabilidade}
                </Row>
                <Row>
                    {habilidade.atrAtacante}
                </Row>
                <Row>
                    {habilidade.utiHabilidade}
                </Row>*/}
            </Container>
        )
    }
}