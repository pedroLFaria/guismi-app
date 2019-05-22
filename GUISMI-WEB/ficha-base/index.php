<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<?php include "php\config.php";
			include "php/function.php"; ?>
		<title>Login GUISMI</title>
	</head>
	<body>
		<div class="fundo"><img src="img/tst.png">
		</div>		
		<div class="login">
		<form method=POST>
<?php
	if(@$_REQUEST['botao']== "Entrar"){
		$login = $_POST['login'];
		$senha = $_POST['senha'];
	
		$result = mysqli_query($con, "SELECT idJogador,nome,login,senha,mestre FROM jogador WHERE login = '".$login."' AND sha1(senha) = sha1('".$senha."')");
		if (mysqli_num_rows($result)!=1){
			echo "Login inválido!"; exit;
		} 
		else{
			$resultado = mysqli_fetch_assoc($result);
			
			if(!isset($_SESSION)) session_start();
			
			$_SESSION['LoginID'] = $resultado['idJogador'];
			$_SESSION['LoginNome'] = $resultado['nome'];
			$_SESSION['LoginMestre'] = $resultado['mestre'];
			
			
			header("Location: ficha-personagem.php"); exit;
		}
	}
?>			
				<input type=text name="login">
				<input type=text name="senha">
				<input type=submit name="botao" value="Entrar">
			</form>
		</div>
	</body>
</html>