import Especializacao from "../sistema/Sistema";

export default interface Habito {
    idHabito: number;
    nomeHabito?: string;
    descHabito?: string;
    qtdFichaHabito?: number;
    especializacoes?: Especializacao[];
}
