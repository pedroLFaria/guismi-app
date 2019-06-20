<?php
	
	if(@$_REQUEST['botao']== "Acessar"){
		$login = $_POST['login'];
		$senha = $_POST['senha'];
	
		$result = mysqli_query($con, "SELECT idJogador,nome,login,senha,mestre FROM jogador WHERE login = '".$login."' AND sha1(senha) = sha1('".$senha."')");
		if (mysqli_num_rows($result)!=1){
			echo "<script> alert('Login inválido!'); </script>";
		} 
		else{
			$resultado = mysqli_fetch_assoc($result);
			
			if(!isset($_SESSION)) session_start();
			
			$_SESSION['LoginID'] = $resultado['idJogador'];
			$_SESSION['LoginNome'] = $resultado['nome'];
			$_SESSION['LoginMestre'] = $resultado['mestre'];
			
			header("Location: escolhe-ficha.php"); exit;
		}
	}
	if(@$_REQUEST['botao-cadastro']=="Cadastrar"){
		$loginNome = $_POST['nome-cadastro'];
		$loginLogin = $_POST['login-cadastro'];
		$loginSenha = $_POST['senha-cadastro'];
		
		if($loginNome != "" || $loginLogin != "" || $loginSenha != ""){

			if(!isset($_SESSION)) session_start();
			
			$_SESSION['loginNome'] = $loginNome;
			$_SESSION['loginLogin'] = $loginLogin;
			$_SESSION['loginSenha'] = $loginSenha;

			header("Location: cadastro.php"); exit;
		}
	}