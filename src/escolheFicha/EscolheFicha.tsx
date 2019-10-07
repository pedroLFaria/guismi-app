import * as React from 'react'
import './EscolheFicha.css'
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import Ficha from "../components/ficha/Ficha";
import Sistema from "../components/sistema/Sistema";
import Image from "react-bootstrap/Image";

interface Props {
}

interface State {
    resumoFichas: Ficha[]
    sistema: Sistema
}

class EscolheFicha extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            resumoFichas: [],
            sistema: Sistema.sistema
        };
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log(this.state.resumoFichas)
    }

    componentDidMount() {
        this.fetchResumoFichas();
        Ficha.findByIdJogador().then(fichas => {
            this.setState({resumoFichas: fichas})
        })
    }

    handleAction(id: any) {
        window.location.hash = "#/ficha?idFicha=" + id
    }

    fetchResumoFichas() {
        return (
            this.state.resumoFichas.map((ficha) =>
                <Button
                    variant={"outline-dark"}
                    onClick={this.handleAction.bind(this, ficha.idFicha)}>
                    <Row>
                        <Col className="corpo">
                            <label>Nome: </label>
                            <h3>{ficha.nomePersonagem}</h3>
                        </Col>
                        <Col>
                            <Image/>
                        </Col>
                    </Row>
                </Button>
            )
        )
    }

    render() {
        return (
            <Container>
                {this.state.resumoFichas.map((ficha)=>
                <Button
                    className='ficha-sel'
                    variant={"outline-dark"}
                    onClick={this.handleAction.bind(this, ficha.idFicha)}>
                    <Row>
                        <Col className="corpo">
                            <label>Nome: </label>
                            <h3>{ficha.nomePersonagem}</h3>
                        </Col>
                        <Col>
                            <Image
                                src={ficha.img}
                                alt={"fail to load"}/>
                        </Col>
                    </Row>
                </Button>
                )}
            </Container>
        )
    }
}

export {EscolheFicha}
