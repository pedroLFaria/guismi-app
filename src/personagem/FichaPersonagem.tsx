import React from 'react'
import queryString from 'query-string'
import Container from "react-bootstrap/Container";
import {HabitoApp} from "../components/habito/HabitoApp";
import Row from "react-bootstrap/Row";
import {Sidebar} from "../components/Sidebar";
import Col from "react-bootstrap/Col";
import { Ficha } from '../components/ficha/Ficha';
import Sistema from '../components/sistema/sistema';

interface Guism{
    ficha:Ficha,
    sistema:Sistema
}

class FichaPersonagem extends React.Component<Guism, Guism> {
    constructor(props:Guism) {
        super(props);
        this.tick();
        this.state = {
            ficha : {

            } ,
            sistema: JSON.parse(sessionStorage.getItem("sistema"))
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 3000);
    };

    tick() {
        fetch("api/ficha/id/" + queryString.parse(window.location.href.split("?")[1]).idFicha, {
            method: "GET",
            Header: new Headers()
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                sessionStorage.setItem("ficha", JSON.stringify(data));
                this.setState({ficha: data})
            })
    }

    onSubmit() {
        console.log(JSON.parse(sessionStorage.getItem("ficha")))
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
                                    <Raca
                                        ficha={ficha}
                                        sistema={sistema}
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
                                    sistema={sistema}
                                />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>)

    }
}

export {FichaPersonagem}
