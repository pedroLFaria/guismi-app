import * as React from "react";
import Ficha from "./Ficha";
import Table from 'react-bootstrap/Table'
import {FormControl} from "react-bootstrap";
import {FormEvent} from "react";

interface Props {
    ficha: Ficha,
    updateAtributos( distForca: number,distConstituicao: number,distAgilidade: number,distDestreza: number,distInteligencia: number,distSabedoria: number,distCarisma: number): boolean
}

interface State{
    distForca: number
    distConstituicao: number
    distAgilidade: number
    distDestreza: number
    distInteligencia: number
    distSabedoria: number
    distCarisma: number
    readonly: boolean
}
export default class TabelaDeAtributosApp extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        const ficha = this.props.ficha;
        this.state = {
            distForca:ficha.distForca,
            distConstituicao:ficha.distConstituicao,
            distAgilidade:ficha.distAgilidade,
            distDestreza:ficha.distDestreza,
            distInteligencia:ficha.distInteligencia,
            distSabedoria:ficha.distSabedoria,
            distCarisma:ficha.distCarisma,
            readonly:true
        };
        this.handleChange.bind(this);
        this.handleDoubleClick.bind(this);
        this.handleBlur.bind(this);
    }

    handleChange(event:FormEvent){
        const value = (event.target as HTMLInputElement).value;
        const name= (event.target as HTMLInputElement).name;
        this.setState({[name]:value} as any)
    }

    handleDoubleClick(){
        this.setState({readonly:false})
    }

    handleBlur(){
        const {distForca ,distConstituicao ,distAgilidade ,distDestreza ,distInteligencia ,distSabedoria ,distCarisma } =  this.state;
        this.props.updateAtributos(distForca ,distConstituicao ,distAgilidade ,distDestreza ,distInteligencia ,distSabedoria ,distCarisma);
    }

    render() {
        const ficha = this.props.ficha;
        return (
            <Table hover={true} size={"sm"} striped>
                <thead>
                <tr className="thead-dark">
                    <th>Atributos</th>
                    <th>Raça</th>
                    <th>Distribuido</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>FOR</th>
                    <td>{ficha.raca.racaForca}</td>
                    <td>
                        <FormControl
                            as={"input"}
                            plaintext={true}
                            readOnly={this.state.readonly}
                            value={this.state.distForca.toString()}
                            onChange={this.handleChange.bind(this)}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                            onBlur = {this.handleBlur.bind(this)}
                            name={"distForca"}
                            type={"number"}
                        />
                    </td>
                    <td>
                        {this.state.distForca + (ficha.raca.racaForca !== undefined ? ficha.raca.racaForca : 0)}
                    </td>
                </tr>
                <tr>
                    <th>CON</th>
                    <td>{ficha.raca.racaConstituicao}</td>
                    <td>
                        {ficha.distConstituicao}
                    </td>
                    <td>
                        {ficha.distConstituicao + (ficha.raca.racaConstituicao !== undefined ? ficha.raca.racaConstituicao : 0)}
                    </td>
                </tr>
                <tr>
                    <th>AGI</th>
                    <td>{ficha.raca.racaAgilidade}</td>
                    <td>
                        {ficha.distAgilidade}
                    </td>
                    <td>
                        {ficha.distForca + (ficha.raca.racaForca !== undefined ? ficha.raca.racaForca : 0)}
                    </td>
                </tr>
                <tr>
                    <th>DES</th>
                    <td>{ficha.raca.racaDestreza}</td>
                    <td>
                        {ficha.distDestreza}
                    </td>
                    <td>
                        {ficha.distAgilidade + (ficha.raca.racaAgilidade !== undefined ? ficha.raca.racaAgilidade : 0)}
                    </td>
                </tr>
                <tr>
                    <th>INT</th>
                    <td>{ficha.raca.racaInteligencia}</td>
                    <td>
                        {ficha.distInteligencia}
                    </td>
                    <td>
                        {ficha.distInteligencia + (ficha.raca.racaInteligencia !== undefined ? ficha.raca.racaInteligencia : 0)}
                    </td>
                </tr>
                <tr>
                    <th>SAB</th>
                    <td>{ficha.raca.racaSabedoria}</td>
                    <td>
                        {ficha.distSabedoria}
                    </td>
                    <td>
                        {ficha.distSabedoria + (ficha.raca.racaSabedoria !== undefined ? ficha.raca.racaSabedoria : 0)}
                    </td>
                </tr>
                <tr>
                    <th>CAR</th>
                    <td>{ficha.raca.racaCarisma}</td>
                    <td>
                        {ficha.distCarisma}
                    </td>
                    <td>
                        {ficha.distCarisma + (ficha.raca.racaCarisma !== undefined ? ficha.raca.racaCarisma : 0)}
                    </td>
                </tr>
                </tbody>
            </Table>
        );
    }
}
