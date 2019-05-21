function inicializa(){
    armazenaRacas();
    setaEscolhaRacas();
    armazenaFicha();
    setaInfoFichas();
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
    document.getElementById('nome_pers').innerHTML = ficha.nome_pers;
    document.getElementById('nome_pers_input').value = ficha.nome_pers; setaAtributosFicha(ficha);
    setaRacaFicha(ficha);
}

function setaAtributosFicha(ficha){
    document.getElementById('dist_for').innerHTML = ficha.dist_for;
    document.getElementById('dist_con').innerHTML = ficha.dist_con;
    document.getElementById('dist_agi').innerHTML = ficha.dist_agi;
    document.getElementById('dist_des').innerHTML = ficha.dist_des;
    document.getElementById('dist_int').innerHTML = ficha.dist_int;
    document.getElementById('dist_sab').innerHTML = ficha.dist_sab;
    document.getElementById('dist_car').innerHTML = ficha.dist_car;
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
    setaAtributosRaca(racas[idRaca-1]);
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
