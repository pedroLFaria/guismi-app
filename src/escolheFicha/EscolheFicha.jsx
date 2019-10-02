import React from 'react'
import './EscolheFicha.css'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class EscolheFicha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resumoFichas: []
        }
    }

    componentDidMount() {
        this.getSistema();
        this.fetchResumoFichas();
    }

    handleAction(id) {
        window.location.hash = "#/ficha?idFicha=" + id
    }

    fetchResumoFichas() {
        fetch("/api/ficha/jogador", {method: "GET", Header: new Headers()})
            .then(response => response.json())
            .then(data => {
                let resumoFichas = data.map((ficha) => {
                    return (
                        <Button className='ficha-sel' name='idFicha' id={ficha.idFicha}
                                onClick={this.handleAction.bind(this, ficha.idFicha)}
                                variant={"outline-dark"}>
                            <Row>
                                <Col className="corpo">
                                    <label>Nome: </label>
                                    <h3>{ficha.nomePersonagem}</h3>
                                </Col>
                                <Col>
                                    <Image src={ficha.img} alt={"fail to load"} roundedCircle/>
                                </Col>
                            </Row>
                        </Button>
                    )
                });
                this.setState({resumoFichas: resumoFichas})
            })
    }

    getSistema() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            sessionStorage.setItem("sistema", xhr.responseText)
        });
        xhr.open('GET', 'api/sistema');
        xhr.send();
    }

    render() {
        return (
            <Container>
                {this.state.resumoFichas}
            </Container>
        )
    }
}

export {EscolheFicha}
