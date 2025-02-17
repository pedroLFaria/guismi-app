import * as React from 'react'
import Table from "react-bootstrap/Table";
import Habito from './Habito';
import Especializacao from '../especializacao/Especializacao';

interface Props {
    habitos: Habito[]
    updateHabitos(habitos: Habito[]): boolean
    especializacoes?:Especializacao[]
}

export default class HabitosApp extends React.Component<Props, any> {

    componentDidUpdate(prevProps: Props) {
        if (JSON.stringify(prevProps.habitos) !== JSON.stringify(this.props.habitos)) {
            this.setState({ habitos: this.props.habitos })
        }
    }

    render() {
        const habitos = this.props.habitos.sort((a, b) => {
            if(a.nomeHabito>b.nomeHabito)
                return 1;
            else if(a.nomeHabito<b.nomeHabito)
                return -1;
            else
                return 0
        });
        return (
            <Table hover={true} size={"sm"}>
                <thead className="thead-dark">
                    <tr>
                        <th>Habito</th>
                        <th>Quantidade</th>
                        <th>Especilizações</th>
                    </tr>
                </thead>
                <tbody>
                    {habitos.map(habito =>{
                        let especComp="";
                        if(this.props.especializacoes !== undefined && habito.especializacoes !== undefined){
                            this.props.especializacoes.filter((value)=>habito.especializacoes!.some((especHabito)=>value.idEspecializacao === especHabito.idEspecializacao)).forEach(especializacao=>{
                                especComp += ((especComp === ""?especializacao.nomeEspecializacao :", " + especializacao.nomeEspecializacao))
                            })
                        }
                        return(<tr key={habito.idHabito}>
                            <td>{habito.nomeHabito}</td>
                            <td>{habito.qtdFichaHabito}</td>
                            <td>{especComp?especComp:""}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        )
    }
}

