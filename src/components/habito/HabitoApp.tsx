import * as React from 'react'
import Table from "react-bootstrap/Table";

interface props {
    ficha: any;
    sistema: any
}

class HabitoApp extends React.Component<props, any> {
    constructor(props: props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: this.props.sistema
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.ficha.habitos.length !== this.props.ficha.habitos.length) {
            this.setState({ficha: this.props.ficha})
        } else {
            this.props.ficha.habitos.forEach(function (habito: any) {
                if (prevProps.ficha.habitos.every((prevHabito: { idHabito: any; }) => prevHabito.idHabito !== habito.idHabito)) {

                }
            })
        }
    }

    render() {
        return (
            <Table hover={true}>
                <thead className="thead-dark">
                <tr>
                    <th>HABITOS</th>
                    <th>Quantidade</th>
                    <th>Mod5</th>
                    <th>Mod10</th>
                </tr>
                </thead>
                <tbody>
                {this.props.ficha.habitos.map((habito: any) =>
                    <tr>
                        <td>{habito.nomeHabito}</td>
                        <td>{habito.qtdFichaHabito}</td>
                        <td>{habito.qtdFichaHabito / 5}</td>
                        <td>{habito.qtdFichaHabito / 10}</td>
                    </tr>)}
                </tbody>
            </Table>
        )
    }
}

export {HabitoApp}

