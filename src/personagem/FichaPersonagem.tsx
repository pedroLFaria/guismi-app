import * as React from 'react'
import queryString from 'query-string'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Sidebar} from "../components/Sidebar";
import {NomeApp} from "../components/ficha/NomeApp";
import {RacaApp} from "../components/raca/RacaApp";
import {CaminhosApp} from "../components/caminho/CaminhosApp";
import {HabitoApp} from "../components/habito/HabitoApp";
import Ficha from "../components/ficha/Ficha";
import Sistema from "../components/sistema/Sistema";
import MyHeaders from "../_services/MyHeaders";
import TabelaDeAtributosApp from "../components/ficha/TabelaDeAtributosApp";
import IdadeApp from "../components/ficha/IdadeApp";
import NivelPersonagem from "../components/ficha/NivelPersonagem";
import ExperienciaApp from "../components/ficha/ExperienciaApp";
import DescendenciasApp from "../components/descendencia/DescendenciasApp";

interface State {
    ficha: Ficha;
    sistema: Sistema
}

class FichaPersonagem extends React.Component<State, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            ficha: new Ficha(Number(queryString.parse(window.location.href.split("?")[1]).idFicha)),
            sistema: Sistema.sistema
        };
    }

    componentDidMount() {
        fetch("api/ficha/id/" + this.state.ficha.idFicha, {
            method: "GET",
            headers: MyHeaders.getMyHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ficha: data as Ficha})
            });
    };

    render() {
        const ficha = this.state.ficha;
        return (
            <Container>
                <Row>
                    <Col md={"auto"}>
                        <Sidebar/>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <legend>Personagem</legend>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <NomeApp
                                        ficha={ficha}
                                    />
                                    <IdadeApp
                                        ficha={ficha}
                                    />
                                </Col>
                                <Col>
                                    <Row>
                                        <NivelPersonagem
                                            ficha={ficha}
                                        />
                                    </Row>
                                    <Row>
                                        <ExperienciaApp
                                            ficha={ficha}
                                        />
                                    </Row>
                                </Col>
                                <Col md={3}>
                                    <RacaApp
                                        ficha={ficha}
                                    />
                                </Col>
                                <Col>
                                    <CaminhosApp
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
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export {FichaPersonagem}
