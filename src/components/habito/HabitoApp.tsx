import * as React from 'react'
import Table from "react-bootstrap/Table";
import Ficha from '../ficha/Ficha';
import Sistema from '../sistema/Sistema';

interface Props {
    ficha: Ficha;
}

interface State{
    ficha:Ficha;
    sistema:Sistema;
}

export default class HabitoApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: Sistema.sistema
        };
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (JSON.stringify(prevProps.ficha.habitos) !== JSON.stringify(this.props.ficha.habitos)) {
            this.setState({ficha: this.props.ficha})
        }
    }

    render() {
        return (
            <Table hover={true} size={"sm"}>
                <thead className="thead-dark">
                <tr>
                    <th>HABITOS</th>
                    <th>Quantidade</th>                   
                </tr>
                </thead>
                <tbody>
                {this.props.ficha.habitos.map((habito) =>
                    <tr key={habito.idHabito}>
                        <td>{habito.nomeHabito}</td>
                        <td>{habito.qtdFichaHabito}</td>
                    </tr>)}
                </tbody>
            </Table>
        )
    }
}

