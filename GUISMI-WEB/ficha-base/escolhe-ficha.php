<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<?php include "php\config.php";
			session_start();?>
		<link rel="stylesheet" type="text/css" href="css/estilo-geral.css" >
		<link rel="stylesheet" type="text/css" href="css/escolhe-ficha.css" >
		<title><?php echo $_SESSION['LoginNome']; ?></title>
	</head>
	<body>
		<div class="cabecalho">
			<form action="logout.php" method=post>
				<input type=submit value="Sair" class="botao-cabecalho">
			</form>
		</div>
		<div class="corpo">
			<form action="ficha-personagem.php?idFicha=<?php echo $_GET['idFicha'];?>" method=get>
				<?php include "php/escolhe.php" ?>
			</form>
		</div>		
	</body>
</html>