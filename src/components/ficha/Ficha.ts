import Situacao from "../situacao/situacao";
import Patrono from "../patrono/Patrono";
import Idioma from "../idioma/Idioma";
import Habito from "../habito/Habito";
import Habilidade from "../habilidade/Habilidade";
import Descendencia from "../descendencia/Descendencia";
import Caminho from "../caminho/Caminho";
import Raca from "../raca/Raca";
import Inventario from "../inventario/Inventario";
import MyHeaders from "../../_services/MyHeaders";
import Especializacao from "../especializacao/Especializacao";

export default class Ficha {
    idFicha: number;
    idRaca: number = -1;
    idCidade: number = -1;
    idJogador: number = -1;
    nomePersonagem: string = "";
    img: string = "";
    idade: number = 0;
    afiliacao: string = "";
    cla: string = "";
    sorteDia: number = -1;
    distForca: number = 0;
    distConstituicao: number = 0;
    distAgilidade: number = 0;
    distDestreza: number = 0;
    distInteligencia: number = 0;
    distSabedoria: number = 0;
    distCarisma: number = 0;
    nivelPersonagem: number = 1;
    expPersonagem: number = 0;
    descPersonagem: string = "";
    histPersonagem: string = "";
    nota: string = "";
    idSanidade: number = 0;
    raca: Raca = {};
    caminhos: Caminho[] = [];
    descendencias: Descendencia[] = [];
    habilidades: Habilidade[] = [];
    habitos: Habito[] = [];
    idiomas: Idioma[] = [];
    inventarios: Inventario[] = [];
    patronos: Patrono[] = [];
    situacoes: Situacao[] = [];
    especializacoes: Especializacao[] = [];
    static apiUrl = "api/ficha/";

    constructor(idFicha: number) {
        this.idFicha = idFicha;
    }

    public getById(): Promise<Ficha> {
        return fetch("api/ficha/id/" + this.idFicha, {
            method: "GET",
            headers: MyHeaders.getMyHeaders()
        })
            .then(response => response.json())
            .then(data => data as Ficha);
    }

    public static asyncGetById(ficha:Ficha): Promise<Ficha> {
        return fetch(this.apiUrl + "async/id/" + ficha.idFicha, {
            method: "GET",
            headers: MyHeaders.getMyHeaders()
        })
            .then(response => response.json())
            .then(data => data as Ficha);
    }

    public static findByIdJogador(): Promise<Ficha[]> {
        return fetch("api/ficha/jogador", {
            method: "GET",
            headers: MyHeaders.getMyHeaders(),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => data as Ficha[])
    }

    public static update(ficha: Ficha): Promise<Response> {
        return fetch('api/ficha/',
            {
                method: 'PUT',
                headers: MyHeaders.getMyHeaders(),
                body: JSON.stringify(ficha)
            });
    }

    private setFichaFromObject(obj: Ficha) {
        this.idRaca = obj.idRaca;
        this.idCidade = obj.idCidade;
        this.idJogador = obj.idJogador;
        this.nomePersonagem = obj.nomePersonagem;
        this.img = obj.img;
        this.idade = obj.idade;
        this.afiliacao = obj.afiliacao;
        this.cla = obj.cla;
        this.sorteDia = obj.sorteDia;
        this.distForca = obj.distForca;
        this.distAgilidade = obj.distAgilidade;
        this.distCarisma = obj.distCarisma;
        this.distConstituicao = obj.distConstituicao;
        this.distDestreza = obj.distDestreza;
        this.distSabedoria = obj.distSabedoria;
        this.distInteligencia = obj.distInteligencia;
        this.nivelPersonagem = obj.nivelPersonagem;
        this.expPersonagem = obj.expPersonagem;
        this.descPersonagem = obj.descPersonagem;
        this.histPersonagem = obj.histPersonagem;
        this.nota = obj.nota;
        this.idSanidade = obj.idSanidade;
        this.raca = obj.raca;
        this.caminhos = obj.caminhos;
        this.descendencias = obj.descendencias;
        this.habilidades = obj.habilidades;
        this.habitos = obj.habitos;
        this.idiomas = obj.idiomas;
        this.inventarios = obj.inventarios;
        this.patronos = obj.patronos;
        this.situacoes = obj.situacoes;
        this.especializacoes = obj.especializacoes;
        return this;
    }

    /*    get idFicha(): number {
            return this._idFicha;
        }

        set idFicha(value: number) {
            this._idFicha = value;
        }

        get idRaca(): number {
            return this._idRaca;
        }

        set idRaca(value: number) {
            this._idRaca = value;
        }

        get idCidade(): number {
            return this._idCidade;
        }

        set idCidade(value: number) {
            this._idCidade = value;
        }

        get idJogador(): number {
            return this._idJogador;
        }

        set idJogador(value: number) {
            this._idJogador = value;
        }

        get nomePersonagem(): string {
            return this._nomePersonagem;
        }

        set nomePersonagem(value: string) {
            this._nomePersonagem = value;
        }

        get img(): string {
            return this._img;
        }

        set img(value: string) {
            this._img = value;
        }

        get idade(): number {
            return this._idade;
        }

        set idade(value: number) {
            this._idade = value;
        }

        get afiliacao(): string {
            return this._afiliacao;
        }

        set afiliacao(value: string) {
            this._afiliacao = value;
        }

        get cla(): string {
            return this._cla;
        }

        set cla(value: string) {
            this._cla = value;
        }

        get sorteDia(): number {
            return this._sorteDia;
        }

        set sorteDia(value: number) {
            this._sorteDia = value;
        }

        get distForca(): number {
            return this._distForca;
        }

        set distForca(value: number) {
            this._distForca = value;
        }

        get distConstituicao(): number {
            return this._distConstituicao;
        }

        set distConstituicao(value: number) {
            this._distConstituicao = value;
        }

        get distAgilidade(): number {
            return this._distAgilidade;
        }

        set distAgilidade(value: number) {
            this._distAgilidade = value;
        }

        get distDestreza(): number {
            return this._distDestreza;
        }

        set distDestreza(value: number) {
            this._distDestreza = value;
        }

        get distInteligencia(): number {
            return this._distInteligencia;
        }

        set distInteligencia(value: number) {
            this._distInteligencia = value;
        }

        get distSabedoria(): number {
            return this._distSabedoria;
        }

        set distSabedoria(value: number) {
            this._distSabedoria = value;
        }

        get distCarisma(): number {
            return this._distCarisma;
        }

        set distCarisma(value: number) {
            this._distCarisma = value;
        }

        get nivelPersonagem(): number {
            return this._nivelPersonagem;
        }

        set nivelPersonagem(value: number) {
            this._nivelPersonagem = value;
        }

        get expPersonagem(): number {
            return this._expPersonagem;
        }

        set expPersonagem(value: number) {
            this._expPersonagem = value;
        }

        get descPersonagem(): string {
            return this._descPersonagem;
        }

        set descPersonagem(value: string) {
            this._descPersonagem = value;
        }

        get histPersonagem(): string {
            return this._histPersonagem;
        }

        set histPersonagem(value: string) {
            this._histPersonagem = value;
        }

        get nota(): string {
            return this._nota;
        }

        set nota(value: string) {
            this._nota = value;
        }

        get idSanidade(): number {
            return this._idSanidade;
        }

        set idSanidade(value: number) {
            this._idSanidade = value;
        }

        get raca(): Raca {
            return this._raca;
        }

        set raca(value: Raca) {
            this._raca = value;
        }

        get caminhos(): Caminho[] {
            return this._caminhos;
        }

        set caminhos(value: Caminho[]) {
            this._caminhos = value;
        }

        get descendencias(): Descendencia[] {
            return this._descendencias;
        }

        set descendencias(value: Descendencia[]) {
            this._descendencias = value;
        }

        get habilidades(): Habilidade[] {
            return this._habilidades;
        }

        set habilidades(value: Habilidade[]) {
            this._habilidades = value;
        }

        get habitos(): Habito[] {
            return this._habitos;
        }

        set habitos(value: Habito[]) {
            this._habitos = value;
        }

        get idiomas(): Idioma[] {
            return this._idiomas;
        }

        set idiomas(value: Idioma[]) {
            this._idiomas = value;
        }

        get inventarios(): Inventario[] {
            return this._inventarios;
        }

        set inventarios(value: Inventario[]) {
            this._inventarios = value;
        }

        get patronos(): Patrono[] {
            return this._patronos;
        }

        set patronos(value: Patrono[]) {
            this._patronos = value;
        }

        get situacoes(): Situacao[] {
            return this._situacoes;
        }

        set situacoes(value: Situacao[]) {
            this._situacoes = value;
        }
    */
}
