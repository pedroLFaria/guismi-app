import React from "react"
import Ficha from "../ficha/Ficha"
import Habilidade from "./Habilidade"
import Sistema from "../sistema/Sistema"
import { Container, Button, Row, Tab, Nav, NavItem, TabPane } from "react-bootstrap"
import { Col } from "react-bootstrap"
import NavLink from "react-bootstrap/NavLink"
import { TabContent } from "react-bootstrap"

interface Props {
    ficha: Ficha
    updateFicha(arg0: Ficha): void
}

interface State {
    habilidades: Habilidade[]
    habilidadesSistema: Habilidade[]
}

export default class HabilidadesApp extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            habilidades: this.props.ficha.habilidades,
            habilidadesSistema: Sistema.sistema.habilidades
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>) {
        if (JSON.stringify(prevProps.ficha.habilidades) !== JSON.stringify(this.props.ficha.habilidades))
            this.setState({
                habilidades: this.props.ficha.habilidades
            })
    }

    render() {
        console.log(this.state.habilidades);
        return (
            <Tab.Container
                id={"habilidades-personagem"}
            >
                <Row>
                    <Col lg={3}>
                        <Nav className="flex-column">
                            {this.state.habilidades.map((habilidade, index) => {
                                return (
                                    <NavItem
                                        key={index}
                                    >
                                        <Nav.Link
                                            eventKey={index}
                                        >
                                            {habilidade.nomeHabilidade}
                                        </Nav.Link>
                                    </NavItem>

                                )
                            })}
                        </Nav>
                    </Col>
                    <Col>
                        <TabContent>
                            {this.state.habilidades.map((habilidade, index) => {
                                return (
                                    <TabPane
                                        key={index}
                                        eventKey={index}
                                    >                                          
                                        {habilidade.descHabilidade}
                                    </TabPane>

                                )
                            })}
                        </TabContent>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}