import React from "react";
import Ficha from "./Ficha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RacaApp} from "../raca/RacaApp";
import {CaminhosApp} from "../caminho/CaminhosApp";
import DescendenciasApp from "../descendencia/DescendenciasApp";
import TabelaDeAtributosApp from "./TabelaDeAtributosApp";
import {HabitoApp} from "../habito/HabitoApp";

interface Props {
    ficha:Ficha
    updateFicha(arg0:Ficha):void
}

interface State {
    ficha:Ficha
}

export default class FichaApp extends React.Component<Props, State>{
    constructor(props:Props) {
        super(props);
        this.state ={
            ficha:this.props.ficha
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>) {
        if(JSON.stringify(prevProps.ficha) !== JSON.stringify(this.props.ficha))
            this.setState({
                ficha:this.props.ficha
            })
    }

    render(){
        const ficha = this.state.ficha;
        return(
            <div>
                <Row>
                    <Col md={2}>
                      Raça
                        <RacaApp
                            updateFicha={this.props.updateFicha}
                            ficha={ficha}
                        />
                    </Col>
                    <Col md={4}>
                      Caminhos
                        <CaminhosApp
                            updateFicha={this.props.updateFicha}
                            ficha={ficha}
                        />
                    </Col>
                    <Col>
                        <TabelaDeAtributosApp
                            ficha={ficha}
                        />
                    </Col>
                </Row>
                <Row>
                  <Col md={6}>
                      <DescendenciasApp
                          ficha={ficha}
                      />
                  </Col>
                </Row>
                <Row>
                    <Col>
                        <HabitoApp
                            ficha={ficha}
                        />
                    </Col>
                    <Col>
                      Especialização
                    </Col>
                </Row>
            </div>
        )
    }
}
