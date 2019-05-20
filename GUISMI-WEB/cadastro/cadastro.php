<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<script type="text/javascript" src="js/functions.js"></script>
	</head>
	<body>
<?php include ('config.php'); ?>
	<div class="raca"> <!-- Raça começa -->
	<?php
	if(@$_REQUEST['botao_raca']=='Gravar'){
		$nome_raca = $_POST['nome_raca'];
		$raridade_raca = $_POST['raridade_raca'];
		$desc_raca = $_POST['desc_raca'];
		$longevidade_raca = $_POST['longevidade_raca'];
		$fisio_raca = $_POST['fisio_raca'];
		$cultura_raca = $_POST['cultura_raca'];
		$historia_raca = $_POST['historia_raca'];
		$raca_for = $_POST['raca_for'];
		$raca_con = $_POST['raca_con'];
		$raca_agi = $_POST['raca_agi'];
		$raca_des = $_POST['raca_des'];
		$raca_int = $_POST['raca_int'];
		$raca_sab = $_POST['raca_sab'];
		$raca_car = $_POST['raca_car'];
		$sangue_raca = $_POST['sangue_raca'];
		$vigor_raca = $_POST['vigor_raca'];

		
		
		$query = "INSERT INTO raca(nome,raridade,desc_raca,longevidade,tracos_fisio,cultura,historia,raca_for,raca_con,raca_agi,raca_des,raca_int,raca_sab,raca_car,sangue,vigor) values ('$nome_raca','$raridade_raca','$desc_raca','$longevidade_raca','$fisio_raca','$cultura_raca','$historia_raca','$raca_for','$raca_con','$raca_agi','$raca_des','$raca_int','$raca_sab','$raca_car','$sangue_raca','$vigor_raca')";
		$result = mysqli_query($con, $query);
	}
	?>	
		<form action=# method=post>
			<h1> Raça </h1>
			Nome: <input type=text name="nome_raca" maxlength=50><br>
			Raridade: <input type=text name="raridade_raca"><br>
			Descrição: <textarea name="desc_raca"> </textarea><br>
			Longevidade: <input type=number name="longevidade_raca"> Anos <br>
			Traços Fisiologicos: <textarea name="fisio_raca"> </textarea><br>
			Cultura: <textarea name="cultura_raca"> </textarea><br>
			História: <textarea name="historia_raca"> </textarea><br>
			Força: <input type=number name="raca_for"><br>
			Constituição: <input type=number name="raca_con"><br>
			Agilidade: <input type=number name="raca_agi"><br>
			Destreza: <input type=number name="raca_des"><br>
			Inteligência: <input type=number name="raca_int"><br>
			Sabedoria: <input type=number name="raca_sab"><br>
			Carisma:  <input type=number name="raca_car"><br>
			Sangue:  <input type=number name="sangue_raca"><br>
			Vigor:  <input type=number name="vigor_raca"><br>
			<input type=submit name="botao_raca" value="Gravar">
		</form>
	</div> <!-- Raça Termina -->
	
	<div class="tracos_raciais"> <!-- Traços raciais começa -->
	<?php
	if(@$_REQUEST['botao_traco']=='Gravar'){
		$nome_traco = $_POST['nome_traco'];
		$nivel_traco = $_POST['nivel_traco'];
		$desc_traco = $_POST['desc_traco'];
		
		$query = "INSERT INTO tracos_raciais (nome,nivel,desc_traco) values ('$nome_traco','$nivel_traco','$desc_traco')";
		$result = mysqli_query($con,$query);
	}
	?>
		<form action=# method=post>
			<h1> Traços Raciais </h1>
			Nome:<input type=text maxlength=50 name="nome_traco"><br>
			Raça: <select></select>
			Nível: <input type=number name="nivel_traco"><br>
			Descrição: <textarea name="desc_traco"> </textarea><br>
			<input type=submit name="botao_traco" value="Gravar">
		</form>
	</div> <!-- Traços raciais termina -->
	
	<div>
	</div>
	
	<div>
	</div>
	<div>
	</div>
	<div>
	</div>
	<div>
	</div>
	<div class="raca">
		<input type=text>
	</div>
	</body>
</html>