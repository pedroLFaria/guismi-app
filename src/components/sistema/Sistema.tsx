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
        const localStorageSistema = localStorage.getItem("sistema");
        if(localStorageSistema)
            this.setSistemaFromObject(JSON.parse(localStorageSistema));
        else
            this.sistemaGetRequest()
    }

     private sistemaGetRequest() {
        fetch('http://ec2-18-228-37-245.sa-east-1.compute.amazonaws.com/api/sistema',{
            method:'GET',
            headers:MyHeaders.getMyHeaders(),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("sistema", JSON.stringify(data));
                this.setSistemaFromObject(data)
            });
    }

    private setSistemaFromObject(json: any){
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

    static get racas(): Raca[] {
        if (this.sistema._racas !== undefined)
            return this.sistema._racas!;
        else
            return []
    }

    static get caminhos(): Caminho[] {
        if (this.sistema._caminhos !== undefined)
            return this.sistema._caminhos!;
        else
            return []
    }


    static get cidades(): Cidade[] {
        if (this.sistema._cidades !== undefined)
            return this.sistema._cidades!;
        else
            return []
    }

    static get descendencias(): Descendencia[] {
        if (this.sistema._descendencias !== undefined)
            return this.sistema._descendencias!;
        else
            return []
    }

    static get especializacoes(): Especializacao[] {
        if (this.sistema._especializacoes !== undefined)
            return this.sistema._especializacoes!;
        else
            return []
    }

    static get habilidades(): Habilidade[] {
        if (this.sistema._habilidades !== undefined)
            return this.sistema._habilidades!;
        else
            return []
    }

    static get habitos(): Habito[] {
        if (this.sistema._habitos !== undefined)
            return this.sistema._habitos!;
        else
            return []
    }

    static get idiomas(): Idioma[] {
        if (this.sistema._idiomas !== undefined)
            return this.sistema._idiomas!;
        else
            return []
    }

    static get patronos(): Patrono[] {
        if (this.sistema._patronos !== undefined)
            return this.sistema._patronos!;
        else
            return []
    }
}

