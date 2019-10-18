import * as React from 'react'
import queryString from 'query-string'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NomeApp } from "../components/ficha/NomeApp";
import { RacaApp } from "../components/raca/RacaApp";
import { CaminhosApp } from "../components/caminho/CaminhosApp";
import { HabitoApp } from "../components/habito/HabitoApp";
import Ficha from "../components/ficha/Ficha";
import Sistema from "../components/sistema/Sistema";
import MyHeaders from "../_services/MyHeaders";
import TabelaDeAtributosApp from "../components/ficha/TabelaDeAtributosApp";
import IdadeApp from "../components/ficha/IdadeApp";
import NivelPersonagem from "../components/ficha/NivelPersonagem";
import ExperienciaApp from "../components/ficha/ExperienciaApp";
import DescendenciasApp from "../components/descendencia/DescendenciasApp";
import { Nav, NavItem, TabContainer, TabContent } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import { TabPane } from 'react-bootstrap';
import HabilidadesApp from '../components/habilidade/HabilidadesApp';

interface State {
    ficha: Ficha
    sistema: Sistema
    show: Map<string, string>
    loading: boolean
}

export default class FichaPersonagem extends React.Component<State, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            ficha: new Ficha(Number(queryString.parse(window.location.href.split("?")[1]).idFicha)),
            sistema: Sistema.sistema,
            show: new Map([["ficha", "block"], ["quadroDeBatalha", "none"], ["inventario", "none"]]),
            loading: false
        };
    }

    componentDidMount() {
        fetch("api/ficha/id/" + this.state.ficha.idFicha, {
            method: "GET",
            headers: MyHeaders.getMyHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ ficha: data as Ficha })
            });
    };

    atualizaFicha(newFicha: Ficha) {
        this.setState({
            ficha: newFicha,
            loading: true
        });
        Ficha.update(this.state.ficha).then(response => {
            if (response.ok) {
                console.log("Ficha atualizada com sucesso.");
                this.setState({ loading: false });
                return true
            } else {
                console.log("Status " + response.statusText);
                return false
            }
        })
    }

    render() {
        const ficha = this.state.ficha;
        return (
            <Container fluid >
                <Row>
                    <Col md={3}>
                        <NomeApp
                            updateFicha={this.atualizaFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={3}>
                        <IdadeApp
                            updateFicha={this.atualizaFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={3}>
                        <NivelPersonagem
                            updateFicha={this.atualizaFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={3}>
                        <ExperienciaApp
                            updateFicha={this.atualizaFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                </Row>
                <TabContainer
                    id={"ficha-personagem"}
                    defaultActiveKey={"ficha"}
                >
                    <Nav
                        variant={"tabs"}
                    >
                        <NavItem>
                            <Nav.Link eventKey={"ficha"}>
                                Ficha
                        </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link eventKey={"quadroDeBatalha"}>
                                Quadro de Batalha
                        </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link
                                eventKey={"inventario"}
                            >
                                Inventário
                            </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link eventKey={"habilidades"}>Habilidades</Nav.Link>
                        </NavItem>
                        <Spinner
                            animation="border"
                            variant="primary"
                            style={{ "float": "right", "marginLeft": "auto", "display": this.state.loading ? "inline-block" : "none" }}
                        />
                    </Nav>
                    <TabContent>
                        <TabPane eventKey={"ficha"}>
                            <Row>
                                <legend>Personagem</legend>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <RacaApp
                                        updateFicha={this.atualizaFicha.bind(this)}
                                        ficha={ficha}
                                    />
                                </Col>
                                <Col>
                                    <CaminhosApp
                                        updateFicha={this.atualizaFicha.bind(this)}
                                        ficha={ficha}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <DescendenciasApp
                                        ficha={ficha}
                                    />
                                </Col>
                                <Col>
                                    espaço vazio
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TabelaDeAtributosApp
                                        ficha={ficha}
                                    />
                                </Col>
                                <Col>
                                    <HabitoApp
                                        ficha={ficha}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane eventKey={"quadroDeBatalha"}>
                            QUADRO DE BATALHA
                        </TabPane>
                        <TabPane eventKey={"inventario"}>
                            INVENTARIO
                        </TabPane>
                        <TabPane eventKey={"habilidades"}>
                            <HabilidadesApp
                                ficha={ficha}
                                updateFicha={this.atualizaFicha.bind(this)}
                            />
                        </TabPane>
                    </TabContent>
                </TabContainer>
            </Container>
        )
    }
}

export { FichaPersonagem }
