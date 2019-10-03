import Habilidade from "../habilidade/Habilidade";
import Especializacao from "../especializacao/Especializacao";
import Habito from "../habito/Habito";

export default  interface Caminho {
    idCaminho: number;
    nomeCaminho?: string;
    descCaminho?: string;
    habilidades?: Habilidade[];
    especializacoes?: Especializacao[];
    habitos?: Habito[];
}
