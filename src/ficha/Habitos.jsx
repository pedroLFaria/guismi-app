import React from 'react'
import Table from "react-bootstrap/Table";

class Habitos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ficha: this.props.ficha,
            sistema: this.props.sistema
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.ficha.habitos.length !== this.props.ficha.habitos.length) {
            this.setState({ficha: this.props.ficha})
        }else {
            for(let habitoCont in this.props.ficha.habitos){
                if(prevProps.ficha.habitos.every(prevHabito => prevHabito.idHabito !== this.props.ficha.habitos[habitoCont].idHabito))
                    this.setState({ficha:this.props.ficha})
            }
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
                    {this.props.ficha.habitos.map ((habito) =>
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
export {Habitos}

