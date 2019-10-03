import Idioma from "../idioma/Idioma";
import Patrono from "../patrono/Patrono";
import {Descendencia} from "../descendencia/Descendencia";
import Habilidade from "../habilidade/Habilidade";
import {Caminho} from "../caminho/Caminho";
// @ts-ignore
import Especializacao from "../especializacao/Especializacao";
import Habito from "../habito/Habito";
import {Raca} from "../raca/Raca";
import Cidade from "../cidade/Cidade";

export default interface Sistema {
    racas: Raca[];
    caminhos: Caminho[];
    cidades: Cidade[];
    descendencias: Descendencia[];
    habilidades: Habilidade[];
    habitos: Habito[];
    idiomas: Idioma[];
    patronos: Patrono[];
    especializacoes: Especializacao[];
}
