import React from "react"
import Habilidade from "./Habilidade"
import {Container, Row} from "react-bootstrap"

interface Props {
    habilidade: Habilidade

    update?(prevHabilidade: Habilidade, newHabilidade: Habilidade): boolean

    add?(newHabilidade: Habilidade): boolean

    delete?(habilidade: Habilidade): boolean
}
export default class HabilidadeApp extends React.Component<Props, any> {

    render() {
        const habilidade = this.props.habilidade;
        return (
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
