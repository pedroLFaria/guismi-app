function abrirCaracteristicas() {
    document.getElementsByClassName('character-main-chracteristcs')[0].style.display = 'block';
    document.getElementsByClassName('character-main-inventario')[0].style.display = 'none';
    document.getElementsByClassName('character-main-antecedentes')[0].style.display = 'none';
    document.getElementsByClassName('character-main-habilidades')[0].style.display = 'none';  
}
function abrirHabilidades(){
    document.getElementsByClassName('character-main-inventario')[0].style.display = 'none';
    document.getElementsByClassName('character-main-chracteristcs')[0].style.display = 'none';
    document.getElementsByClassName('character-main-antecedentes')[0].style.display = 'none';  
    document.getElementsByClassName('character-main-habilidades')[0].style.display = 'block';
}
function abrirAntecedentes(){
    document.getElementsByClassName('character-main-chracteristcs')[0].style.display = 'none';
    document.getElementsByClassName('character-main-inventario')[0].style.display = 'none';
    document.getElementsByClassName('character-main-antecedentes')[0].style.display = 'block';
    document.getElementsByClassName('character-main-habilidades')[0].style.display = 'none';  
}
function abrirInventario(){
    document.getElementsByClassName('character-main-chracteristcs')[0].style.display = 'none';
    document.getElementsByClassName('character-main-inventario')[0].style.display = 'block';
    document.getElementsByClassName('character-main-antecedentes')[0].style.display = 'none';
    document.getElementsByClassName('character-main-habilidades')[0].style.display = 'none';  
}
function modalTextBox(node) {
    node.style.display = "none";
    node.nextElementSibling.style.display = "inline-block";
    node.nextElementSibling.focus();
}
function modalInputBox(node){
    node.previousElementSibling.innerHTML = node.value;
    node.previousElementSibling.style.display = "inline-block";
    node.style.display = "none";
    
}