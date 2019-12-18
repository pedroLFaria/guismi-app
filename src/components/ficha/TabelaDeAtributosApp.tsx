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
        this.state = {
            distForca:this.props.ficha.distForca,
            distConstituicao:this.props.ficha.distConstituicao,
            distAgilidade:this.props.ficha.distAgilidade,
            distDestreza:this.props.ficha.distDestreza,
            distInteligencia:this.props.ficha.distInteligencia,
            distSabedoria:this.props.ficha.distSabedoria,
            distCarisma:this.props.ficha.distCarisma,
            readonly:true
        };
        this.handleChange.bind(this);
        this.handleDoubleClick.bind(this);
        this.handleBlur.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(JSON.stringify(prevProps.ficha) !== JSON.stringify(this.props.ficha)){
            this.setState({
                distForca:this.props.ficha.distForca,
                distConstituicao:this.props.ficha.distConstituicao,
                distAgilidade:this.props.ficha.distAgilidade,
                distDestreza:this.props.ficha.distDestreza,
                distInteligencia:this.props.ficha.distInteligencia,
                distSabedoria:this.props.ficha.distSabedoria,
                distCarisma:this.props.ficha.distCarisma
            })
        }
    }

    handleChange(event:FormEvent){
        const value = (event.target as HTMLInputElement).value;
        const name= (event.target as HTMLInputElement).name;
        this.setState({[name]:Number.parseInt(value)} as any);
    }

    handleDoubleClick(){
        this.setState({readonly:false})
    }

    handleBlur(){
        const {distForca ,distConstituicao ,distAgilidade ,distDestreza ,distInteligencia ,distSabedoria ,distCarisma } =  this.state;
        this.props.updateAtributos(distForca ,distConstituicao ,distAgilidade ,distDestreza ,distInteligencia ,distSabedoria ,distCarisma);
        this.setState({readonly:true})
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
                            type={"number"}
                            name={"distForca"}
                        />
                    </td>
                    <td>
                        {this.state.distForca + (ficha.raca.racaForca? ficha.raca.racaForca : 0)}
                    </td>
                </tr>
                <tr>
                    <th>CON</th>
                    <td>{ficha.raca.racaConstituicao}</td>
                    <td>
                        <FormControl
                            as={"input"}
                            plaintext={true}
                            readOnly={this.state.readonly}
                            value={this.state.distConstituicao.toString()}
                            onChange={this.handleChange.bind(this)}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                            onBlur = {this.handleBlur.bind(this)}
                            type={"number"}
                            name={"distConstituicao"}
                        />
                    </td>
                    <td>
                        {this.state.distConstituicao + (ficha.raca.racaConstituicao ? ficha.raca.racaConstituicao : 0)}
                    </td>
                </tr>
                <tr>
                    <th>AGI</th>
                    <td>{ficha.raca.racaAgilidade}</td>
                    <td>
                        <FormControl
                            as={"input"}
                            plaintext={true}
                            readOnly={this.state.readonly}
                            value={this.state.distAgilidade.toString()}
                            onChange={this.handleChange.bind(this)}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                            onBlur = {this.handleBlur.bind(this)}
                            type={"number"}
                            name={"distAgilidade"}
                        />
                    </td>
                    <td>
                        {this.state.distAgilidade + (ficha.raca.racaAgilidade ? ficha.raca.racaAgilidade : 0)}
                    </td>
                </tr>
                <tr>
                    <th>DES</th>
                    <td>{ficha.raca.racaDestreza}</td>
                    <td>
                        <FormControl
                            as={"input"}
                            plaintext={true}
                            readOnly={this.state.readonly}
                            value={this.state.distDestreza.toString()}
                            onChange={this.handleChange.bind(this)}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                            onBlur = {this.handleBlur.bind(this)}
                            type={"number"}
                            name={"distDestreza"}
                        />
                    </td>
                    <td>
                        {this.state.distDestreza + (ficha.raca.racaDestreza ? ficha.raca.racaDestreza : 0)}
                    </td>
                </tr>
                <tr>
                    <th>INT</th>
                    <td>{ficha.raca.racaInteligencia}</td>
                    <td>
                        <FormControl
                            as={"input"}
                            plaintext={true}
                            readOnly={this.state.readonly}
                            value={this.state.distInteligencia.toString()}
                            onChange={this.handleChange.bind(this)}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                            onBlur = {this.handleBlur.bind(this)}
                            type={"number"}
                            name={"distInteligencia"}
                        />
                    </td>
                    <td>
                        {this.state.distInteligencia + (ficha.raca.racaInteligencia !== undefined ? ficha.raca.racaInteligencia : 0)}
                    </td>
                </tr>
                <tr>
                    <th>SAB</th>
                    <td>{ficha.raca.racaSabedoria}</td>
                    <td>
                        <FormControl
                            as={"input"}
                            plaintext={true}
                            readOnly={this.state.readonly}
                            value={this.state.distSabedoria.toString()}
                            onChange={this.handleChange.bind(this)}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                            onBlur = {this.handleBlur.bind(this)}
                            type={"number"}
                            name={"distSabedoria"}
                        />
                    </td>
                    <td>
                        {this.state.distSabedoria + (ficha.raca.racaSabedoria !== undefined ? ficha.raca.racaSabedoria : 0)}
                    </td>
                </tr>
                <tr>
                    <th>CAR</th>
                    <td>{ficha.raca.racaCarisma}</td>
                    <td>
                        <FormControl
                            as={"input"}
                            plaintext={true}
                            readOnly={this.state.readonly}
                            value={this.state.distCarisma.toString()}
                            onChange={this.handleChange.bind(this)}
                            onDoubleClick={this.handleDoubleClick.bind(this)}
                            onBlur = {this.handleBlur.bind(this)}
                            type={"number"}
                            name={"distCarisma"}
                        />
                    </td>
                    <td>
                        {this.state.distCarisma + (ficha.raca.racaCarisma !== undefined ? ficha.raca.racaCarisma : 0)}
                    </td>
                </tr>
                </tbody>
            </Table>
        );
    }
}
