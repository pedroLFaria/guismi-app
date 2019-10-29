import Especializacao from "../especializacao/Especializacao";


export default interface Habito {
    idHabito: number;
    nomeHabito?: string;
    descHabito?: string;
    qtdFichaHabito?: number;
    especializacoes?: Especializacao[];
}
