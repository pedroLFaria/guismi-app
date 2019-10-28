import * as React from 'react'
import Table from "react-bootstrap/Table";
import Habito from './Habito';

interface Props {
    habitos: Habito[]
    updateHabitos(habitos: Habito[]): boolean
}

interface State {
    habitos: Habito[]
}

export default class HabitosApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            habitos: this.props.habitos
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (JSON.stringify(prevProps.habitos) !== JSON.stringify(this.props.habitos)) {
            this.setState({ habitos: this.props.habitos })
        }
    }

    render() {
        const habitos = this.props.habitos
        return (
            <Table hover={true} size={"sm"}>
                <thead className="thead-dark">
                    <tr>
                        <th>HABITOS</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {habitos.map(habito =>
                        <tr key={habito.idHabito}>
                            <td>{habito.nomeHabito}</td>
                            <td>{habito.qtdFichaHabito}</td>
                        </tr>)}
                </tbody>
            </Table>
        )
    }
}

