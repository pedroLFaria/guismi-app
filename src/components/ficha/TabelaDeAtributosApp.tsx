import * as React from "react";
import Ficha from "./Ficha";
import Table from 'react-bootstrap/Table'
import {FormControl} from "react-bootstrap";

interface Props {
    ficha: Ficha
}

interface State{
    ficha: Ficha,
    readonly: boolean[]
}
export default class TabelaDeAtributosApp extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            ficha:Object.assign({}, this.props.ficha),
            readonly:[]
        };
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
                            readOnly={true}
                            value={ficha.distForca.toString()}
                            type={"number"}
                        />
                    </td>
                    <td>
                        {ficha.distForca + (ficha.raca.racaForca !== undefined ? ficha.raca.racaForca : 0)}
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
