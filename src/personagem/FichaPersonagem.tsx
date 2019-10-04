import * as React from 'react'
import queryString from 'query-string'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Sidebar} from "../components/Sidebar";
import {Nome} from "../components/ficha/Nome";
import {RacaApp} from "../components/raca/RacaApp";
import {CaminhosApp} from "../components/caminho/CaminhoApp";
import {HabitoApp} from "../components/habito/HabitoApp";
import Ficha from "../components/ficha/Ficha";
import Sistema from "../components/sistema/Sistema";

interface State {
    ficha: Ficha;
    sistema: Sistema
}

class FichaPersonagem extends React.Component<State, State> {
    constructor(props:any) {
        super(props);
        this.state = {
            ficha : new Ficha(Number(queryString.parse(window.location.href.split("?")[1]).idFicha)).getById(),
            sistema: Sistema.sistema
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        console.log("idFicha " + this.state.ficha.idFicha)
        /*this.state.ficha.getById().then(ficha=>{
            this.setState({ficha:ficha})
        })*/
        setInterval(() => this.tick(), 3000);
    };


    tick() {
        this.setState({
            ficha:this.state.ficha.getById()
        })
    }

    onSubmit() {

    }

    render() {
        const ficha = this.state.ficha;
        const sistema = this.state.sistema;
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
                                    <Nome
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
                                        sistema={sistema}
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
