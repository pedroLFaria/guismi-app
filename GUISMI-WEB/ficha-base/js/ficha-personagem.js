function inicializa(){
    armazenaRacas();
    setaEscolhaRacas();
    armazenaFicha();
    setaInfoFichas();
    calculaAtributosFinais();
}

function armazenaFicha(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            sessionStorage.setItem("ficha", this.responseText);
        }
    };
    xmlhttp.open("GET", "php/fichaAjax.php", true);
    xmlhttp.send();
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
    document.getElementById('dist_for_input').innerHTML = ficha.dist_for;
    document.getElementById('dist_con').innerHTML = ficha.dist_con;
    document.getElementById('dist_con_input').innerHTML = ficha.dist_con;
    document.getElementById('dist_agi').innerHTML = ficha.dist_agi;
    document.getElementById('dist_agi_input').innerHTML = ficha.dist_agi;
    document.getElementById('dist_des').innerHTML = ficha.dist_des;
    document.getElementById('dist_des_input').innerHTML = ficha.dist_des;
    document.getElementById('dist_int').innerHTML = ficha.dist_int;
    document.getElementById('dist_int_input').innerHTML = ficha.dist_int;
    document.getElementById('dist_sab').innerHTML = ficha.dist_sab;
    document.getElementById('dist_sab_input').innerHTML = ficha.dist_sab;
    document.getElementById('dist_car').innerHTML = ficha.dist_car;
    document.getElementById('dist_car_input').innerHTML = ficha.dist_car;
}

function setaRacaFicha(ficha) {
    
    raca_pers = racas.filter(function (raca) { return raca.idRaca == this; }, ficha.idRaca)[0];
    document.getElementById("raca_pers").innerHTML = raca_pers.nome;
    document.getElementById("raca_pers_input").selectedIndex  = raca_pers.idRaca;
    setaAtributosRaca(raca_pers);
}

function setaLevelFicha(ficha) {
    document.getElementById('nivel_pers').innerText = ficha.nivel_pers;
    document.getElementById('nivel_pers_input').value = ficha.nivel_pers;
    setaXP(ficha.nivel_pers);
}

function setaXP(nivel) {
    document.getElementById('exp_pers_nivel').innerText = progressao[nivel].xp;
    document.getElementById('exp_pers').innerText = progressao[nivel].xp;
    document.getElementById('exp_pers_input').value = Number(progressao[nivel].xp);
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

function criaOption(raca){
    var opt = document.createElement('option');
    opt.innerHTML = raca.nome;
    opt.value = raca.idRaca;
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
    ]
    atributos.forEach(function (atributo) {
        calculaAtributosTotal(atributo[3], [atributo[0].innerHTML, atributo[1].innerHTML])
        calculaAtributosM5(atributo[4], [atributo[0].innerHTML, atributo[1].innerHTML])
        calculaAtributosM2(atributo[5], [atributo[0].innerHTML, atributo[1].innerHTML])
    });
    calculaQuadro();
}

function calculaQuadro() {
    raca_escolhida = racas.filter(function (raca) { return raca.idRaca == this; }, document.getElementById("raca_pers_input").selectedOptions[0].value)[0];
    calculaSangueFinal(Number(document.getElementById("tt_con").innerText), raca_pers.sangue)
    calculaVigorFinal(Number(document.getElementById("tt_con").innerText), raca_pers.vigor)
    calculaManaFinal(Number(document.getElementById("tt_int").innerText), false);
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

function calculaAtributosTotal(campoResultado, listaAtributos) {
    var resultado = 0;
    listaAtributos.forEach(function (atributo) {
           resultado += Number(atributo);
    });
    campoResultado.innerHTML = resultado;
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
    { xp: 1000, habito: 2, atributo: 2, criacaoHabilidade: 0, habilidade: 1 },
    { xp: 3000, habito: 4, atributo: 4, criacaoHabilidade: 0, habilidade: 1 },
    { xp: 6000, habito: 6, atributo: 6, criacaoHabilidade: 0, habilidade: 1 },
    { xp: 10000, habito: 8, atributo: 8, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 15000, habito: 10, atributo: 10, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 21000, habito: 12, atributo: 12, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 28000, habito: 14, atributo: 14, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 36000, habito: 16, atributo: 16, criacaoHabilidade: 1, habilidade: 2 },
    { xp: 45000, habito: 18, atributo: 18, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 55000, habito: 20, atributo: 20, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 66000, habito: 22, atributo: 22, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 79500, habito: 24, atributo: 24, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 95500, habito: 26, atributo: 26, criacaoHabilidade: 2, habilidade: 2 },
    { xp: 114000, habito: 29, atributo: 28, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 135000, habito: 32, atributo: 30, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 158500, habito: 35, atributo: 32, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 184500, habito: 38, atributo: 34, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 213000, habito: 41, atributo: 36, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 240000, habito: 44, atributo: 38, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 277500, habito: 47, atributo: 40, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 313500, habito: 50, atributo: 42, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 354500, habito: 53, atributo: 44, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 400500, habito: 56, atributo: 46, criacaoHabilidade: 3, habilidade: 3 },
    { xp: 451500, habito: 59, atributo: 48, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 507500, habito: 62, atributo: 50, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 568500, habito: 65, atributo: 52, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 634500, habito: 68, atributo: 54, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 705500, habito: 71, atributo: 56, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 781500, habito: 74, atributo: 58, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 862500, habito: 77, atributo: 60, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 953500, habito: 80, atributo: 62, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 1054500, habito: 83, atributo: 64, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 1165500, habito: 86, atributo: 66, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 1286500, habito: 89, atributo: 68, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 1417500, habito: 92, atributo: 70, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 1558500, habito: 95, atributo: 72, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 1709500, habito: 98, atributo: 74, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 1870500, habito: 101, atributo: 76, criacaoHabilidade: 4, habilidade: 4 },
    { xp: 2041500, habito: 104, atributo: 78, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 2241500, habito: 107, atributo: 80, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 2541500, habito: 110, atributo: 82, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 2941500, habito: 115, atributo: 85, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 3441500, habito: 120, atributo: 88, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 4041500, habito: 125, atributo: 91, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 4741500, habito: 130, atributo: 94, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 5541500, habito: 135, atributo: 97, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 6441500, habito: 140, atributo: 100, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 7441500, habito: 145, atributo: 105, criacaoHabilidade: 5, habilidade: 5 },
    { xp: 8941500, habito: 150, atributo: 110, criacaoHabilidade: 6, habilidade: 6 }
]

var ficha = JSON.parse(sessionStorage.getItem("ficha"));

var racas = JSON.parse(sessionStorage.getItem("racas"));