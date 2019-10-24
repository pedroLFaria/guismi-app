import React from "react";
import Ficha from "./Ficha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RacaApp} from "../raca/RacaApp";
import CaminhosApp from "../caminho/CaminhosApp";
import DescendenciasApp from "../descendencia/DescendenciasApp";
import TabelaDeAtributosApp from "./TabelaDeAtributosApp";
import HabitoApp from "../habito/HabitoApp";
import Descendencia from "../descendencia/Descendencia";

interface Props {
    ficha:Ficha
    updateFicha(arg0:Ficha):void
}

interface State {

}

export default class FichaApp extends React.Component<Props, State>{

    updateDescendencias(descendencias: Descendencia[]){
        let ficha = this.props.ficha;
        ficha.descendencias = descendencias;
        this.props.updateFicha(ficha);
        return true
    }

    render(){
        const ficha = this.props.ficha;
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
                          descendencias={ficha.descendencias}
                          updateDescendencias={this.updateDescendencias.bind(this)}
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
