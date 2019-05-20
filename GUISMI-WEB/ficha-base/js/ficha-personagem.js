function inicializaRacas(){
    armazenaRacas();
    setaEscolhaRacas();
}

function armazenaRacas(){
    xmlhttp = new XMLHttpRequest();   
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log (JSON.parse(this.responseText))
            sessionStorage.setItem("racas",this.responseText);
        }
    };
    xmlhttp.open("GET", "php/racaAjax.php", true);
    xmlhttp.send();
}

function setaEscolhaRacas(){
    var selectRacas = document.getElementsByName("raca")[0];
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
    //console.log("idRaca + " + idRaca + ", racas[idRaca-1] " + racas[(idRaca-1)]);
    setaAtributosRaca(racas[idRaca-1]);
}

function setaAtributosRaca(raca){
    console.log(raca);
    document.querySelector("body > table:nth-child(26) > tbody > tr:nth-child(1) > td:nth-child(2)").innerHTML = raca.raca_for;
    document.querySelector("body > table:nth-child(26) > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML = raca.raca_con;
    document.querySelector("body > table:nth-child(26) > tbody > tr:nth-child(3) > td:nth-child(2)").innerHTML = raca.raca_agi;
    document.querySelector("body > table:nth-child(26) > tbody > tr:nth-child(4) > td:nth-child(2)").innerHTML = raca.raca_des;
    document.querySelector("body > table:nth-child(26) > tbody > tr:nth-child(5) > td:nth-child(2)").innerHTML = raca.raca_int;
    document.querySelector("body > table:nth-child(26) > tbody > tr:nth-child(6) > td:nth-child(2)").innerHTML = raca.raca_sab;
    document.querySelector("body > table:nth-child(26) > tbody > tr:nth-child(7) > td:nth-child(2)").innerHTML = raca.raca_car;
}
