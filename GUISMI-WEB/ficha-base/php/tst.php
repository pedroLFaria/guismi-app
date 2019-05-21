<?php 
	$result = mysqli_query($con, "SELECT * FROM ficha WHERE idFicha='3'");
	$row = mysqli_fetch_assoc($result);
	foreach($row as $key => $value)
	{
		$_POST[$key] = $value;
	}

?>

<?php	
	$result = mysqli_query($con,"SELECT * FROM idiomas");
	while($coluna = mysqli_fetch_array($result)){
		echo "<option value='".$coluna['idIdiomas']."'>".$coluna['nome']."</option>";
	}	
?>
<?php echo $_POST['nome_pers'];?>
<?php echo $_POST['nome_pers'];?>
<?php echo $_POST['idRaca'];?>
<?php echo $_POST['dist_for'];?>
<?php echo $_POST['dist_con'];?>
<?php echo $_POST['dist_agi'];?>