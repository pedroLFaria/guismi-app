<?php
    include "config.php";
    include "function.php";
    $sistema = (object)['idiomas'=>loopColunaAJAX(selecionaLimpo($con, "idiomas")),
                     'racas'=>loopColunaAJAX(selecionaLimpo($con, "raca")),
                     'caminhos'=>loopColunaAJAX(selecionaLimpo($con, "caminho"))];
    echo json_encode($sistema);