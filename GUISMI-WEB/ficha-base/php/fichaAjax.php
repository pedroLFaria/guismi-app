<?php
	include "config.php";
	$result = mysqli_query($con, "SELECT * FROM ficha WHERE idFicha='3'");
	$row = mysqli_fetch_assoc($result);
	echo json_encode ($row);
?>