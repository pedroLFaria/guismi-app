<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<?php include "php\config.php";
			include "php/function.php"; ?>
		<link rel="stylesheet" type="text/css" href="css/estilo-geral.css" >
		<link rel="stylesheet" type="text/css" href="css/index.css" >
		<title>Login GUISMI</title>
	</head>
	<body>
			<form method=POST>
			<table class="login">
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
	else if(@$_REQUEST['botao']=="Cadastrar"){
		
	}
?>					<tr><td> Guia de Sobrevivencia em um Mundo Improvisado </td></tr>
					<tr><td><input type=text name="login" placeholder="Login"></td></tr>
					<tr><td><input type=password name="senha" placeholder="Senha"></td></tr>
					<tr><td><input type=submit name="botao" value="Acessar"> &nbsp <input type=submit name="botao" value="Cadastrar"></td></tr>
				</table>
				</form>

	</body>
</html>