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
    ficha: Ficha

    updateFicha(arg0: Ficha): void
}

interface State {

}

export default class FichaApp extends React.Component<Props, State> {

    updateDescendencias(descendencias: Descendencia[]) {
        this.props.updateFicha(Object.assign(new Ficha(this.props.ficha.idFicha), this.props.ficha, {descendencias: descendencias}));
        return true
    }

    updateCaminhos(caminhos: Caminho[]) {
        this.props.updateFicha(Object.assign(new Ficha(this.props.ficha.idFicha), this.props.ficha, {caminhos: caminhos}));
        return true;
    }

    updateRaca(raca: Raca) {
        this.props.updateFicha(Object.assign(new Ficha(this.props.ficha.idFicha), this.props.ficha, {
            raca: raca,
            idRaca: raca.idRaca
        }));
        return true
    }

    updateHabitos(habitos: Habito[]) {
        this.props.updateFicha(Object.assign(new Ficha(this.props.ficha.idFicha), this.props.ficha, {habittos: habitos}));
        return true
    }

    updateAtributos(distForca: number, distConstituicao: number, distAgilidade: number, distDestreza: number, distInteligencia: number, distSabedoria: number, distCarisma: number) {
        this.props.updateFicha(Object.assign(new Ficha(this.props.ficha.idFicha), this.props.ficha, {
            distForca,
            distConstituicao,
            distAgilidade,
            distDestreza,
            distInteligencia,
            distSabedoria,
            distCarisma
        }));
        return true
    }

    render() {
        const ficha = this.props.ficha;
        return (
            <Row>
                <Col md={6}>
                    <Row>
                        <Col>
                            Raça
                            <RacaApp
                                updateRaca={this.updateRaca.bind(this)}
                                raca={ficha.raca}
                            />
                        </Col>
                        <Col>
                            <CaminhosApp
                                updateCaminhos={this.updateCaminhos.bind(this)}
                                caminhos={ficha.caminhos}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <DescendenciasApp
                            descendencias={ficha.descendencias}
                            updateDescendencias={this.updateDescendencias.bind(this)}
                        />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <TabelaDeAtributosApp
                            updateAtributos={this.updateAtributos.bind(this)}
                            ficha={ficha}
                        />
                    </Row>
                    <Row>
                        <HabitosApp
                            habitos={ficha.habitos}
                            updateHabitos={this.updateHabitos.bind(this)}
                            especializacoes={ficha.especializacoes}
                        />
                    </Row>
                </Col>
            </Row>
        )
    }
}
