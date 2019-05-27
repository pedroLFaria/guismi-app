<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<?php include "php\config.php";
			include "php/function.php"; 
			session_start();?>
		<link rel="stylesheet" type="text/css" href="css/estilo-geral.css" >
		<link rel="stylesheet" type="text/css" href="css/escolhe-ficha.css" >
		<title><?php echo $_SESSION['LoginNome']; ?></title>
	</head>
	<body>
		<div class="cabecalho">
		</div>
		<div class="corpo">
			<form action="ficha-personagem.php?idFicha=<?php echo $_GET['idFicha'];?>" method=get>
<?php
	$result = mysqli_query($con, "SELECT ficha.idFicha,ficha.nome_pers,ficha.img,ficha.idade,raca.nome FROM ficha,raca WHERE idJogador = '".$_SESSION['LoginID']."' and ficha.idRaca=raca.idRaca");
	while($coluna=mysqli_fetch_array($result)){
?>
			<button class="ficha-sel" name="idFicha" value="<?php echo $coluna['idFicha'];?>">
			<label class="botao-texto">
				<label>Nome: </label><h3><?php echo $coluna['nome_pers'];?></h3>
				<label>Raça: </label><h5><?php echo $coluna['nome']?></h5>
				<label>Idade: </label><h5><?php echo $coluna['idade']?> Anos</h5>
			</label>
				<img src="<?php echo $coluna['img'];?>"/>
			</button><br>
<?php 
	}
?>
			</form>
		</div>		
	</body>
</html>