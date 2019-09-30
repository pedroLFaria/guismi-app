import React from 'react'

class Habitos extends React.Components {
    constructor(props) {
        super(props)
        this.setState({
            ficha: this.props.ficha,
            sistema: this.props.sistema
        })
    }
    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>HABITOS</th>
                        <th>Quantidade</th>
                        <th>Mod5</th>
                        <th>Mod10</th>
                    </tr>
                </thead>
                <tbody>
                    {this.sate.ficha.habitos.map ((habito) =>
                        <tr>
                            <td>{habito.nomeHabito}</td>
                            <td>{habito.qtdFichaHabito}</td>
                            <td>{habito.qtdFichaHabito / 5}</td>
                            <td>{habito.qtdFichaHabito / 10}</td>
                        </tr>)}
                </tbody>
            </table>
        )
    }
}

