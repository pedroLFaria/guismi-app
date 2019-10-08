import * as React from "react";
import Ficha from "./Ficha";
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import {FormControl} from "react-bootstrap";

interface Props {
    ficha: Ficha
}

interface State {
    ficha: Ficha
}

export default class TabelaDeAtributosApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (JSON.stringify(prevProps.ficha) !== JSON.stringify(this.props.ficha))
            this.setState({
                ficha: this.props.ficha
            })
    }

    render() {
        const ficha = this.state.ficha;
        return (
            <Table size={"sm"}>
                <thead>
                <tr>
                    <th>Atributos</th>
                    <th>R</th>
                    <th>DS</th>
                    <th>B.Gerais</th>
                    <th>TT</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>FOR</th>
                    <td>{ficha.raca.racaForca}</td>
                    <td>
                        {ficha.distForca}
                    </td>
                    <td>
                        <FormControl as={"input"} type={"number"} size={"sm"} plaintext={true} value={'0'}/>
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
                        <Form.Control as={"input"} type={"number"} size={"lg"} plaintext={true} value={'0'}/>
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
                        <FormControl as={"input"} type={"number"} size={"lg"} plaintext={true} value={'0'}/>
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
                        <FormControl as={"input"} type={"number"} size={"lg"} plaintext={true} value={'0'}/>
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
                        <FormControl as={"input"} type={"number"} size={"lg"} plaintext={true} value={'0'}/>
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
                        <FormControl as={"input"} type={"number"} size={"lg"} plaintext={true} value={'0'}/>
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
                        <FormControl as={"input"} type={"number"} size={"lg"} plaintext={true} value={'0'}/>
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
