<?php
	include "config.php";
	include "function.php";

	/*$result = selecionaLimpo($con, "raca");
	$racas = array();
	while($raca = mysqli_fetch_array($result)){
		array_push($racas,$raca);	
	}
	echo json_encode($racas);*/
	$racas = array();
	echo loopColunaAJAX(selecionaLimpo($con, "raca"),$racas);
?>