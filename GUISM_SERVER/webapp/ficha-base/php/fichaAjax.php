<?php
    include "config.php";
    include"function.php";
    include "selects.php";
    session_start();
    $idFicha = $_SESSION["idFichaAtual"];
   	$ficha = (object) mysqli_fetch_assoc(mysqli_query($con, $selectFicha . $idFicha));
    $ficha->raca = mysqli_fetch_assoc(mysqli_query($con, $selectRaca . $idFicha));
    $ficha->habilidades = loopColunaAJAX(mysqli_query($con, $selectHabilidade . $idFicha));
    $ficha->habitos = loopColunaAJAX(mysqli_query($con, $selectHabitos . $idFicha));
    $ficha->descendencia = loopColunaAJAX(mysqli_query($con, $selectDescendencia . $idFicha));
    $ficha->especializacao = loopColunaAJAX(mysqli_query($con, $selectEspecializacao . $idFicha));
    $ficha->inventario = loopColunaAJAX(mysqli_query($con, $selectInventario . $idFicha));
    $ficha->tracosRacias = mysqli_fetch_assoc(mysqli_query($con, $selectTracosRacias . $idFicha));
	echo json_encode($ficha);
 