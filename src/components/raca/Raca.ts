import Idioma from "../idioma/Idioma";
import Patrono from "../patrono/Patrono";
import Descendencia from "../descendencia/Descendencia";
import Especializacao from "../especializacao/Especializacao";
import Habito from "../habito/Habito";
import Habilidade from "../habilidade/Habilidade";

export default interface Raca {
    idRaca?: number;
    nomeRaca?: string;
    raridadeRaca?: string;
    descRaca?: string;
    longevidadeRaca?: string;
    culturaRaca?: string;
    historiaRaca?: string;
    racaForca?: number;
    racaConstituicao?: number;
    racaAgilidade?: number;
    racaDestreza?: number;
    racaInteligencia?: number;
    racaSabedoria?: number;
    racaCarisma?: number;
    sangue?: number;
    vigor?: number;
    descendencias?: Descendencia[];
    especializacoes?: Especializacao[];
    habilidades?: Habilidade[];
    habitos?: Habito[];
    idiomas?: Idioma[];
    patronos?: Patrono[];
    tracosfisiologicos?: string;
}
