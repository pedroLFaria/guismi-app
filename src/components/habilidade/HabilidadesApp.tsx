import React from "react"
import Habilidade from "./Habilidade"
import { Row, Tab, Nav, NavItem, TabPane } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { TabContent } from "react-bootstrap"
import HabilidadeApp from "./HabilidadeApp"

interface Props {
    habilidades: Habilidade[]
    updateHabilidades?(habilidades: Habilidade[]): boolean
}
export default class HabilidadesApp extends React.Component<Props,{}>{

    update(prevHabilidade: Habilidade, newHabilidade: Habilidade){
        let index = this.findIndex(prevHabilidade, this.props.habilidades);
        const habilidades = this.props.habilidades.map((value, valueIndex)=>{
            if(valueIndex === index)
                return newHabilidade;
            else
                return value
        });
        return this.props.updateHabilidades!(habilidades);
    }

    add(newHabilidade: Habilidade){
        return this.props.updateHabilidades!(this.props.habilidades.concat(newHabilidade));
    }

    delete(habilidade: Habilidade){
        return this.props.updateHabilidades!(this.props.habilidades.filter(value => value.idHabilidade !== habilidade.idHabilidade))
    }

    findIndex(habilidade: Habilidade, habilidades: Habilidade[]) {
        return habilidades.findIndex(element =>
            element.idHabilidade === habilidade.idHabilidade);
    }

    render() {
        return (
            <Tab.Container
                id={"habilidades-personagem"}
            >
                <Row>
                    <Col lg={3}>
                        <Nav className="flex-column">
                            {this.props.habilidades.map((habilidade, index) => {
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
                            {this.props.habilidades.map((habilidade, index) => {
                                return (
                                    <TabPane
                                        key={index}
                                        eventKey={index}
                                    >
                                        <HabilidadeApp
                                            update={this.update.bind(this)}
                                            add={this.add.bind(this)}
                                            delete={this.delete.bind(this)}
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
