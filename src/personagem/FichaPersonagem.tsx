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

interface State {
    ficha: Ficha;
    sistema: Sistema
}

class FichaPersonagem extends React.Component<State, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            ficha: new Ficha(Number(queryString.parse(window.location.href.split("?")[1]).idFicha)).getById(),
            sistema: Sistema.sistema
        };
        this.tick = this.tick.bind(this);
        this.tick()
    }

    componentDidMount() {
        console.log("idFicha " + this.state.ficha.idFicha);
        setInterval(() => this.tick(), 1113000);
        this.tick()
    };

    tick() {
        this.setState({
            ficha:this.state.ficha.getById()

        })

    }

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
                                { /*
                            <span>Caminho</span>
                            <Caminho
                                ficha={ficha}
                                sistema={sistema}
                            />
        </div>
                    </div>
                    <Habitos
                        ficha={ficha}
                        sistema={sistema}
                    />*/}
                                <HabitoApp
                                    ficha={ficha}
                                />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>)

    }
}

export {FichaPersonagem}
