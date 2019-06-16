<?php
    include "config.php";
    session_start();
    $idFicha = $_SESSION["idFichaAtual"];
    $resultFicha = mysqli_query($con, "SELECT * FROM ficha WHERE idFicha='$idFicha'");
    $habitos = mysqli_query($con, "SELECT habitos.nome,habitos.desc_hab,ficha_has_habitos.qtd_fic_hab,caminho_has_habitos.qtd_cam_hab,descendencia_has_habitos.qtd_desc_hab,raca_has_habitos.qtd_rac_hab FROM ficha
LEFT JOIN ficha_has_caminho ON ficha_has_caminho.idFicha = ficha.idFicha
LEFT JOIN descendencia_has_ficha ON descendencia_has_ficha.idFicha = ficha.idFicha
LEFT JOIN habitos ON habitos.idHabitos IS NOT NULL
LEFT JOIN ficha_has_habitos ON ficha_has_habitos.idFicha = ficha.idFicha AND  ficha_has_habitos.idHabitos = habitos.idHabitos
LEFT JOIN raca_has_habitos ON raca_has_habitos.idRaca = ficha.idRaca AND raca_has_habitos.idHabitos = habitos.idHabitos
LEFT JOIN caminho_has_habitos ON caminho_has_habitos.idCaminho = ficha_has_caminho.idCaminho AND caminho_has_habitos.idHabitos = habitos.idHabitos
LEFT JOIN descendencia_has_habitos ON descendencia_has_habitos.idDescendencia = descendencia_has_ficha.idDescendencia AND descendencia_has_habitos.idHabitos = habitos.idHabitos
where ficha.idFicha = '$idFicha'");
	$ficha = mysqli_fetch_assoc($resultFicha);
    array_push($ficha, mysqli_fetch_assoc($habitos));
	array_push($ficha, mysqli_fetch_assoc($habitos));
	echo json_encode($ficha);
?>
