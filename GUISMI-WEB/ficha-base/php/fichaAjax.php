<?php
	include "config.php";
	session_start();
	$test = $_SESSION["idFichaAtual"];
	$result = mysqli_query($con, "SELECT * FROM ficha WHERE idFicha='$test'");
	$row = mysqli_fetch_assoc($result);
	echo json_encode ($row);
?>