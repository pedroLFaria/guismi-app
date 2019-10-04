import Idioma from "../idioma/Idioma";
import Patrono from "../patrono/Patrono";
import Descendencia from "../descendencia/Descendencia";
import Habilidade from "../habilidade/Habilidade";
import Caminho from "../caminho/Caminho";
import Especializacao from "../especializacao/Especializacao";
import Habito from "../habito/Habito";
import Raca from "../raca/Raca";
import Cidade from "../cidade/Cidade";
import MyHeaders from "../../_services/MyHeaders";

export default class Sistema {
    private static _sistema: Sistema;
    private _racas?: Raca[];
    private _caminhos?: Caminho[] = [];
    private _cidades?: Cidade[];
    private _descendencias?: Descendencia[];
    private _habilidades?: Habilidade[];
    private _habitos?: Habito[];
    private _idiomas?: Idioma[];
    private _patronos?: Patrono[];
    private _especializacoes?: Especializacao[];

    private constructor() {
        this.sistemaGetRequest()
    }

     private sistemaGetRequest() {
        fetch('api/sistema',{
            method:'GET',
            headers:MyHeaders.getMyHeaders(),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => this.setSistemaFromObject(data));
    }

    private setSistemaFromObject(json: Sistema){
        this._racas = json.racas;
        this._caminhos = json.caminhos;
        this._cidades = json.cidades;
        this._descendencias = json.descendencias;
        this._habilidades = json.habilidades;
        this._habitos = json.habitos;
        this._idiomas = json.idiomas;
        this._patronos = json.patronos;
        this._especializacoes = json.especializacoes;
    }

    static get sistema() {
        if (this._sistema === undefined) {
            this._sistema = new Sistema()
        }
        return this._sistema
    }

    get racas(): Raca[] {
        if (this._racas !== undefined)
            return this._racas!;
        else
            return []
    }

    get caminhos(): Caminho[] {
        if (this._caminhos !== undefined)
            return this._caminhos!;
        else
            return []
    }


    get cidades(): Cidade[] {
        if (this._cidades !== undefined)
            return this._cidades!;
        else
            return []
    }

    get descendencias(): Descendencia[] {
        if (this._descendencias !== undefined)
            return this._descendencias!;
        else
            return []
    }

    get especializacoes(): Especializacao[] {
        if (this._especializacoes !== undefined)
            return this._especializacoes!;
        else
            return []
    }

    get habilidades(): Habilidade[] {
        if (this._habilidades !== undefined)
            return this._habilidades!;
        else
            return []
    }

    get habitos(): Habito[] {
        if (this._habitos !== undefined)
            return this._habitos!;
        else
            return []
    }

    get idiomas(): Idioma[] {
        if (this._idiomas !== undefined)
            return this._idiomas!;
        else
            return []
    }

    get patronos(): Patrono[] {
        if (this._patronos !== undefined)
            return this._patronos!;
        else
            return []
    }
}

