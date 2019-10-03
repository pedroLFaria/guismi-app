import Habilidade from "../habilidade/Habilidade";
import Situacao from "../situacao/situacao";
import Habito from "../habito/Habito";
import Sanidade from "../sanidade/Sanidade";


export interface Descendencia {
    idDescendencia: number;
    nomeDescendencia: string;
    descDescendencia: string;
    habilidades: Habilidade[];
    habitos: Habito[];
    sanidade: Sanidade;
    situacoes: Situacao[];
}
