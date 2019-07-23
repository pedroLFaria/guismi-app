function inicializa() {
}
function teste(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            sessionStorage.setItem("acao", this.responseText);
        }
    };
    xmlhttp.open("GET", "/api/acao/4", true);
    xmlhttp.send();
}
function armazenaSistema() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            sessionStorage.setItem("sistema", this.responseText);
        }
    };
    xmlhttp.open("GET", "php/sistemaAjax.php", false);
    xmlhttp.send();
}
function armazenaFicha() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            sessionStorage.setItem("ficha", this.responseText);
        }
    };
    xmlhttp.open("GET", "php/fichaAjax.php", false);
    xmlhttp.send();
}
function setaSistema() {
    setaEscolhaCaminhos();
    setaEscolhaIdiomas();
    setaEscolhaRacas();
}
function setaEscolhaCaminhos() {
    var selectCaminhos = document.getElementById("caminhos_pers_input");
    for (i in caminhos)
        selectCaminhos.appendChild(criaOption(caminhos[i]));
}
function setaEscolhaIdiomas() {
    raca_pers = racas.filter(function (raca) { return raca.nome == this; }, ficha.raca.nome)[0];
    document.getElementById("raca_pers").innerHTML = raca_pers.nome;
    document.getElementById("raca_pers_input").selectedIndex = raca_pers.idRaca;
    setaAtributosRaca(raca_pers);
}

function setaInfoFichas() {
    if(ficha==null)
        return;
    document.getElementById('nome_pers').innerHTML = ficha.nome_pers;
    document.getElementById('nome_pers_input').value = ficha.nome_pers;
    setaAtributosFicha(ficha);
    setaRacaFicha(ficha);
    setaLevelFicha(ficha);
}
function setaAtributosFicha(ficha){
    document.getElementById('dist_for').innerHTML = ficha.dist_for;
    document.getElementById('dist_con').innerHTML = ficha.dist_con;
    document.getElementById('dist_agi').innerHTML = ficha.dist_agi;
    document.getElementById('dist_des').innerHTML = ficha.dist_des;
    document.getElementById('dist_int').innerHTML = ficha.dist_int;
    document.getElementById('dist_sab').innerHTML = ficha.dist_sab;
    document.getElementById('dist_car').innerHTML = ficha.dist_car;
    document.getElementById('input_dist_for').value = ficha.dist_for;
    document.getElementById('input_dist_con').value = ficha.dist_con;
    document.getElementById('input_dist_agi').value = ficha.dist_agi;
    document.getElementById('input_dist_des').value = ficha.dist_des;
    document.getElementById('input_dist_int').value = ficha.dist_int;
    document.getElementById('input_dist_sab').value = ficha.dist_sab;
    document.getElementById('input_dist_car').value = ficha.dist_car;
}
function setaRacaFicha(ficha) {
    raca_pers = racas.filter(function (raca) { return raca.nome == this; }, ficha.raca.nome)[0];
    document.getElementById("raca_pers").innerHTML = raca_pers.nome;
    document.getElementById("raca_pers_input").selectedIndex  = raca_pers.idRaca;
    setaAtributosRaca(raca_pers);
}
function setaLevelFicha(ficha) {
    document.getElementById('nivel_pers_input').value = ficha.nivel_pers;
    setaXP(ficha.nivel_pers);
}
function setaXP(nivel) {
    document.getElementById('exp_pers_input').value = Number(ficha.exp_pers);
}
function armazenaRacas() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            sessionStorage.setItem("racas", this.responseText);
        }
    };
    xmlhttp.open("GET", "php/racaAjax.php", true);
    xmlhttp.send();
}
function setaEscolhaRacas(){
    var selectRacas = document.getElementById("raca_pers_input");
    for(i in racas)
        selectRacas.appendChild(criaOption(racas[i]));
}
function criaOption(objeto){
    var opt = document.createElement('option');
    opt.innerHTML = objeto.nome;
    //opt.value = objeto.id;
    return opt;
}

function onChangeRaca(idRaca){
    setaAtributosRaca(racas[idRaca - 1]);
    calculaAtributosFinais();
     console.log('tete');
}

function setaAtributosRaca(raca){
    document.getElementById("raca_for").innerHTML = raca.raca_for;
    document.getElementById("raca_con").innerHTML = raca.raca_con;
    document.getElementById("raca_agi").innerHTML = raca.raca_agi;
    document.getElementById("raca_des").innerHTML = raca.raca_des;
    document.getElementById("raca_int").innerHTML = raca.raca_int;
    document.getElementById("raca_sab").innerHTML = raca.raca_sab;
    document.getElementById("raca_car").innerHTML = raca.raca_car;
}

function calculaAtributosFinais() {
    var atributos = [
        document.querySelectorAll('[id$="_for"]'),
        document.querySelectorAll('[id$="_con"]'),
        document.querySelectorAll('[id$="_agi"]'),
        document.querySelectorAll('[id$="_des"]'),
        document.querySelectorAll('[id$="_int"]'),
        document.querySelectorAll('[id$="_sab"]'),
        document.querySelectorAll('[id$="_car"]')
    ];
    atributos.forEach(function (atributo) {        
        calculaAtributosTotal(atributo[4], [atributo[0].innerHTML, atributo[2].value, atributo[3].value])
        calculaAtributosM5(atributo[5], [atributo[0].innerHTML, atributo[2].value, atributo[3].value])
        calculaAtributosM2(atributo[6], [atributo[0].innerHTML, atributo[2].value, atributo[3].value])
    });
    calculaQuadro();
}
 
function calculaQuadro() {
    raca_escolhida = racas.filter(function (raca) { return raca.idRaca == this; }, document.getElementById("raca_pers_input").selectedOptions[0].value)[0];
    calculaSangueFinal(Number(document.getElementById("tt_con").innerText), raca_pers.sangue);
    calculaVigorFinal(Number(document.getElementById("tt_con").innerText), raca_pers.vigor);
    calculaManaFinal(Number(document.getElementById("tt_int").innerText), false);
    calculaRegenSangue(Number(document.getElementById("sangue_base").innerText));
    calculaRegenVigor(Number(document.getElementById('tt_con').innerText), Number(document.getElementById('tt_agi').innerText));
    calculaRegenMana(Number(document.getElementById('tt_sab').innerText));
}

function calculaSangueFinal(con, sangueRaca) {
    calculaAtributosTotal(document.getElementById("sangue_base"), [con, sangueRaca]);
    calculaAtributosTotal(document.getElementById('sangue_total'), [con, sangueRaca, document.getElementById('sangue_perdido').value])
}

function calculaVigorFinal(con, vigorRaca) {
    calculaAtributosTotal(document.getElementById("vigor_base"), [con, vigorRaca]);
    calculaAtributosTotal(document.getElementById('vigor_total'), [con, vigorRaca, document.getElementById('vigor_perdido').value])
}

function calculaManaFinal(int, temAmpliadorMana) {
    temAmpliadorMana ? calculaAtributosTotal(document.getElementById("mana_base"), [int * 7]) : calculaAtributosTotal(document.getElementById("mana_base"), [int * 5]);
    calculaAtributosTotal(document.getElementById('mana_total'), [Number(document.getElementById("mana_base").innerText), document.getElementById('mana_perdido').value])
}

function calculaRegenSangue(sangueBase) {
    calculaAtributosTotal(document.getElementById('regen_sangue_base'), [sangueBase / 2])
    calculaAtributosTotal(document.getElementById('regen_sange_final'), [Number(document.getElementById("regen_sangue_base").innerText), document.getElementById('regen_sangue_buff').value])
}

function calculaRegenVigor(conTT, agiTT) {
    calculaAtributosTotal(document.getElementById('regen_vigor_base'), [conTT + agiTT/ 8])
    calculaAtributosTotal(document.getElementById('regen_vigor_final'), [Number(document.getElementById("regen_vigor_base").innerText), document.getElementById('regen_vigor_buff').value])
}

function calculaRegenMana(sabTT) {
    calculaAtributosTotal(document.getElementById('regen_mana_base'), [sabTT / 2])
    calculaAtributosTotal(document.getElementById('regen_mana_final'), [Number(document.getElementById("regen_mana_base").innerText), document.getElementById('regen_mana_buff').value])
}

function setaAtributosInputEmLabel() {
    document.getElementById('dist_for').innerHTML = document.getElementById('input_dist_for').value;
    document.getElementById('dist_con').innerHTML = document.getElementById('input_dist_con').value;
    document.getElementById('dist_agi').innerHTML = document.getElementById('input_dist_agi').value;
    document.getElementById('dist_des').innerHTML = document.getElementById('input_dist_des').value;
    document.getElementById('dist_int').innerHTML = document.getElementById('input_dist_int').value;
    document.getElementById('dist_sab').innerHTML = document.getElementById('input_dist_sab').value;
    document.getElementById('dist_car').innerHTML = document.getElementById('input_dist_car').value;
}

function calculaAtributosTotal(campoResultado, listaAtributos) {
    var resultado = 0;
    listaAtributos.forEach(function (atributo) {
           resultado += Number(atributo);
    });
    campoResultado.innerHTML = Math.round(resultado);
}

function calculaAtributosM5(campoResultado, listaAtributos) {
    var resultado = 0;
    listaAtributos.forEach(function (atributo) {
        resultado += Number(atributo);
    });
    campoResultado.innerHTML = resultado / 5;  
}

function calculaAtributosM2(campoResultado, listaAtributos) {
    var resultado = 0;
    listaAtributos.forEach(function (atributo) {
        resultado += Number(atributo);
    });
    campoResultado.innerHTML = resultado / 2;  
}

var progressao = [
    { xp: 0, habito: 0, atributo: 0, criacaoHabilidade: 0, habilidade: 0 },
    { xp: 0, habito: 0, atributo: 0, criacaoHabilidade: 0, habilidade: 1 },
    { xp: 100, habito: 2, atributo: 2, criacaoHabilidade: 0, habilidade: 1 },
    { xp: 300, habito: 4, atributo: 4, criacaoHabilidade: 0, habilidade: 1 },
    { xp: 600, habito: 6, atributo: 6, criacaoHabilidade: 0, habilidade: 1 },
    { xp: 1000, habito: 8, atributo: 8, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 1500, habito: 10, atributo: 10, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 2100, habito: 12, atributo: 12, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 2800, habito: 14, atributo: 14, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 3600, habito: 16, atributo: 16, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 4500, habito: 18, atributo: 18, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 5500, habito: 20, atributo: 20, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 6600, habito: 22, atributo: 22, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 7950, habito: 24, atributo: 24, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 9550, habito: 26, atributo: 26, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 11400, habito: 29, atributo: 28, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 13500, habito: 32, atributo: 30, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 15850, habito: 35, atributo: 32, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 18450, habito: 38, atributo: 34, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 21300, habito: 41, atributo: 36, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 24000, habito: 44, atributo: 38, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 27750, habito: 47, atributo: 40, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 31350, habito: 50, atributo: 42, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 35450, habito: 53, atributo: 44, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 40050, habito: 56, atributo: 46, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 45150, habito: 59, atributo: 48, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 50750, habito: 62, atributo: 50, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 56850, habito: 65, atributo: 52, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 63450, habito: 68, atributo: 54, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 70550, habito: 71, atributo: 56, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 78150, habito: 74, atributo: 58, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 86250, habito: 77, atributo: 60, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 95350, habito: 80, atributo: 62, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 105450, habito: 83, atributo: 64, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 116550, habito: 86, atributo: 66, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 128650, habito: 89, atributo: 68, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 141750, habito: 92, atributo: 70, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 155850, habito: 95, atributo: 72, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 170950, habito: 98, atributo: 74, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 187050, habito: 101, atributo: 76, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 204150, habito: 104, atributo: 78, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 224150, habito: 107, atributo: 80, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 254150, habito: 110, atributo: 82, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 294150, habito: 115, atributo: 85, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 344150, habito: 120, atributo: 88, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 404150, habito: 125, atributo: 91, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 474150, habito: 130, atributo: 94, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 554150, habito: 135, atributo: 97, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 644150, habito: 140, atributo: 100, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 744150, habito: 145, atributo: 105, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 894150, habito: 150, atributo: 110, criacaoHabilidade: 6, habilidade: 6 }
]
var ficha = JSON.parse(sessionStorage.getItem("ficha"));
var racas = JSON.parse(sessionStorage.getItem("sistema")).racas;
var idiomas = JSON.parse(sessionStorage.getItem("sistema")).idiomas;
var caminhos = JSON.parse(sessionStorage.getItem("sistema")).caminhos;