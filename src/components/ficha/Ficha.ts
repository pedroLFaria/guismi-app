import Situacao from "../situacao/situacao";
import Patrono from "../patrono/Patrono";
import Idioma from "../idioma/Idioma";
import Habito from "../habito/Habito";
import Habilidade from "../habilidade/Habilidade";
import { Descendencia } from "../descendencia/Descendencia";
import { Caminho } from "../caminho/Caminho";
import { Raca } from "../raca/Raca";
import Inventario from "../inventario/Inventario";

export interface Ficha {
    idFicha?:          number;
    idRaca?:           number;
    idCidade?:         number;
    idJogador?:        number;
    nomePersonagem?:   string;
    img?:              string;
    idade?:            number;
    afiliacao?:        string;
    cla?:              string;
    sorteDia?:         number;
    distForca?:        number;
    distConstituicao?: number;
    distAgilidade?:    number;
    distDestreza?:     number;
    distInteligencia?: number;
    distSabedoria?:    number;
    distCarisma?:      number;
    nivelPersonagem?:  number;
    expPersonagem?:    number;
    descPersonagem?:   string;
    histPersonagem?:   string;
    nota?:             string;
    idSanidade?:       number;
    raca?:             Raca;
    caminhos?:         Caminho[];
    descendencias?:    Descendencia[];
    habilidades?:      Habilidade[];
    habitos?:          Habito[];
    idiomas?:          Idioma[];
    inventarios?:      Inventario[];
    patronos?:         Patrono[];
    situacoes?:        Situacao[];
}
function getFichabyId(id:number) : Ficha{
    var myRequest = new XMLHttpRequest();
    fetch("api/ficha/id/" + queryString.parse(window.location.href.split("?")[1]).idFicha, {
        method: "GET",
        Header: new Headers()
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            sessionStorage.setItem("ficha", JSON.stringify(data));
            this.setState({ficha: data})
        })
    return {}
}