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
    ficha = JSON.parse(sessionStorage.getItem("ficha"));
    if(ficha==null)
        return;
    document.getElementById('nome_pers').innerHTML = ficha.nome_pers;
    document.getElementById('nome_pers_input').value = ficha.nome_pers; setaAtributosFicha(ficha);
    setaRacaFicha(ficha);
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
    racas = JSON.parse(sessionStorage.getItem("racas"));
    raca_pers = racas.filter(pesquisaIdRaca, ficha.idRaca)[0];
    setaAtributosRaca(raca_pers);
    document.getElementById("raca_pers").innerHTML = raca_pers.nome;
}

function pesquisaIdRaca(raca) {
    return raca.idRaca == this;
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
    racas = JSON.parse(sessionStorage.getItem("racas"));
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
    racas = JSON.parse(sessionStorage.getItem("racas"));
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
     console.log('tete2');
    
    atributos.forEach(function (atributo) {
        calculaAtributosTotal(atributo[3], [atributo[0].innerHTML, atributo[1].innerHTML])
        calculaAtributosM5(atributo[4], [atributo[0].innerHTML, atributo[1].innerHTML])
        calculaAtributosM2(atributo[5], [atributo[0].innerHTML, atributo[1].innerHTML])
    });
 
    calculaQuadro(atributos);
}

function calculaQuadro(atributos) {
    var racaPersonagem = {sangue:10, vigor:15}
    calculaSangueFinal()
    calculaVigorFinal()
    calculaManaFinal();
}

function calculaSangueFinal(con, sangueRaca) {
    calculaAtributosTotal(document.getElementById("sangue_base"), [con, sangueRaca]);
    calculaAtributosTotal(document.getElementById('sangue_total'), [con, sangueRaca, -Number(document.getElementById('sangue_perdido').value)])
}

function calculaVigorFinal(con, vigorRaca) {
    calculaAtributosTotal(document.getElementById("vigor_base"), [con, vigorRaca]);
    calculaAtributosTotal(document.getElementById('vigor_total'), [con, vigorRaca, -Number(document.getElementById('vigor_perdido').value)])
}

function calculaManaFinal(int, temAmpliadorMana) {
    temAmpliadorMana ? calculaAtributosTotal(document.getElementById("mana_base"), [int * 7]) : calculaAtributosTotal(document.getElementById("mana_base"), [int * 5]);
    calculaAtributosTotal(document.getElementById('mana_total'), [Number(document.getElementById("mana_base")), -Number(document.getElementById('mana_perdido').value)])
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

