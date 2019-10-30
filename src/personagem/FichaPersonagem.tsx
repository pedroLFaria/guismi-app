import * as React from 'react'
import queryString from 'query-string'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NomeApp } from "../components/ficha/NomeApp";
import Ficha from "../components/ficha/Ficha";
import Sistema from "../components/sistema/Sistema";
import MyHeaders from "../_services/MyHeaders";
import IdadeApp from "../components/ficha/IdadeApp";
import NivelPersonagem from "../components/ficha/NivelPersonagem";
import ExperienciaApp from "../components/ficha/ExperienciaApp";
import { Nav, NavItem, TabContainer, TabContent, TabPane } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import HabilidadesApp from '../components/habilidade/HabilidadesApp';
import FichaApp from "../components/ficha/FichaApp";
import "./FichaPersonagem.css"
import Habilidade from "../components/habilidade/Habilidade";

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

    updateFicha(newFicha: Ficha) {
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

    updateHabilidades(habilidades:Habilidade[]){
        return true
    }

    render() {
        const ficha = this.state.ficha;
        return (
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <NomeApp
                            updateFicha={this.updateFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={2}>
                        <IdadeApp
                            updateFicha={this.updateFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={2}>
                        <NivelPersonagem
                            updateFicha={this.updateFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={2}>
                        <ExperienciaApp
                            updateFicha={this.updateFicha.bind(this)}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={2}>
                      Vida////////Estado////////
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <ButtonGroup>
                        <Button
                            size={"sm"} variant="secondary"
                        >Retornar</Button>
                        <Button
                            size={"sm"} variant="secondary"
                        >Sair</Button>
                      </ButtonGroup>
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
                            style={{
                                "float": "right",
                                "marginLeft": "auto",
                                "display": this.state.loading ? "inline-block" : "none"
                            }}
                        />
                    </Nav>
                    <TabContent>
                        <TabPane eventKey={"ficha"}>
                            <FichaApp
                                ficha={ficha}
                                updateFicha={this.updateFicha.bind(this)}
                            />
                        </TabPane>
                        <TabPane eventKey={"quadroDeBatalha"}>
                            QUADRO DE BATALHA
                            -Atributos
                            -Defesas
                            -
                        </TabPane>
                        <TabPane eventKey={"inventario"}>
                            INVENTARIO
                        </TabPane>
                        <TabPane eventKey={"habilidades"}>
                            <HabilidadesApp
                                habilidades={ficha.habilidades}
                                updateHabilidades={this.updateHabilidades.bind(this)}
                            />
                        </TabPane>
                    </TabContent>
                </TabContainer>
            </Container>
        )
    }
}

export { FichaPersonagem }
