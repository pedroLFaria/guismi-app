import Especializacao from "../sistema/sistema";

export default interface Habito {
    idHabito: number;
    nomeHabito?: string;
    descHabito?: string;
    qtdFichaHabito?: number;
    especializacoes?: Especializacao[];
}
