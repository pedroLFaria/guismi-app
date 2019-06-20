function alterarDisplay(item, alterar){
	document.getElementsByClassName(item)[0].style.display = alterar;
}

function validaFormulario(){
	var nome = document.getElementById("nome-cadastro").value;
	var login = document.getElementById("login-cadastro").value;
	var senha = document.getElementById("senha-cadastro").value;
	var repsenha = document.getElementById("repsenha-cadastro").value;
	var valido = false;
	
	if(login.search(" ") > 0 || senha.search(" ") > 0 || repsenha.search(" ") > 0){
		alert('Não deve haver espaço nos campos (exceto o campo Nome)!');
	}
	else if(login.length < 8 || login.length > 15 ){
		alert('O login deve conter entre 8 e 15 caracteres!');
		
	}
	else if(senha.length < 8 || senha.length > 15 ){
		alert('A senha deve conter entre 8 e 15 caracteres!');
	}
	else if(senha != repsenha){
		alert('As senhas devem ser iguais!');
	}
	else{
		valido = true;
	}
	
	if(!valido){
		document.getElementById("FormCadastro").addEventListener("submit",function previne(event){
			event.preventDefault();
		});
	}
}