import React from "react"
import Ficha from "../ficha/Ficha"
import Habilidade from "./Habilidade"
import { Row, Tab, Nav, NavItem, TabPane } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { TabContent } from "react-bootstrap"
import HabilidadeApp from "./HabilidadeApp"

interface Props {
    ficha: Ficha
    updateFicha(arg0: Ficha): void
}

interface State {
    habilidades: Habilidade[]
}

export default class HabilidadesApp extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            habilidades: this.props.ficha.habilidades
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>) {
        if (JSON.stringify(prevProps.ficha.habilidades) !== JSON.stringify(this.props.ficha.habilidades))
            this.setState({
                habilidades: this.props.ficha.habilidades
            })
    }

    updateHabilidades(prevHabilidade: Habilidade, newHabilidade: Habilidade) {
        let ficha = this.props.ficha
        let index = ficha.habilidades.findIndex(habilidade =>
            habilidade.idHabilidade === prevHabilidade.idHabilidade)
        if (index) {
            ficha.habilidades[index] = newHabilidade;
            this.props.updateFicha(ficha);
            return true
        } else {
            return false
        }
    }

    render() {
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
                                        <HabilidadeApp
                                            updateHabilidades={this.updateHabilidades.bind(this)}
                                            habilidade={habilidade}
                                        />
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