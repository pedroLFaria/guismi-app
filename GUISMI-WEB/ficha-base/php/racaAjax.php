<?php
	include "config.php";
	$result = mysqli_query($con, "SELECT * FROM raca");
	$racas = array();
	while($raca = mysqli_fetch_array($result)){
		array_push($racas,$raca);	
	}
	echo json_encode($racas);
?>