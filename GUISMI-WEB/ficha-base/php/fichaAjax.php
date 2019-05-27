<?php
	include "config.php";
	session_start();
	$idFichaAtual = $_SESSION["idFichaAtual"];
	$result = mysqli_query($con, "SELECT * FROM ficha WHERE idFicha='$idFichaAtual'");
	$row = mysqli_fetch_assoc($result);
	echo json_encode ($row);
?>