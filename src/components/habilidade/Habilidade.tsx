import Situacao from "../situacao/situacao";
import Acao from "../acao/acao";

export default interface Habilidade {
    idHabilidade: number;
    nomeHabilidade?: string;
    atrAtacante?: string;
    tipoHabilidade?: string;
    utiHabilidade?: string;
    descHabilidade?: string;
    prerequisito?: string;
    nivelRequerido?: number;
    acoes?: Acao[];
    gasto?: any[];
    situacoes?: Situacao[];
}
