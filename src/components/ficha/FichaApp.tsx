import React from "react";
import Ficha from "./Ficha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RacaApp from "../raca/RacaApp";
import CaminhosApp from "../caminho/CaminhosApp";
import DescendenciasApp from "../descendencia/DescendenciasApp";
import TabelaDeAtributosApp from "./TabelaDeAtributosApp";
import HabitosApp from "../habito/HabitosApp";
import Descendencia from "../descendencia/Descendencia";
import Caminho from "../caminho/Caminho";
import Raca from "../raca/Raca";
import Habito from "../habito/Habito";

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

    updateCaminhos(caminhos: Caminho[]){
        let ficha = this.props.ficha;
        ficha.caminhos = caminhos;
        this.props.updateFicha(ficha);
        return true;
    }

    updateRaca(raca:Raca){
        let ficha = this.props.ficha;
        ficha.raca = raca;
        this.props.updateFicha(ficha);
        return true
    }

    updateHabitos(habitos:Habito[]){
        let ficha = this.props.ficha;
        ficha.habitos = habitos;
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
                            updateRaca={this.updateRaca.bind(this)}
                            raca={ficha.raca}
                        />
                    </Col>
                    <Col md={4}>
                        <CaminhosApp
                            updateCaminhos={this.updateCaminhos.bind(this)}
                            caminhos={ficha.caminhos}
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
                        <HabitosApp
                            habitos={ficha.habitos}
                            updateHabitos={this.updateHabitos.bind(this)}
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
