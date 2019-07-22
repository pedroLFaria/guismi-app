<?php
    include "config.php";
    include "function.php";
    $sistema = (object)['caminhos'=>loopColunaAJAX(selecionaLimpo($con, "caminho")),
                        'cidades'=> loopColunaAJAX(selecionaLimpo($con, "cidade")),
                        'descendencias' =>loopColunaAJAX(selecionaLimpo($con, "descendencia")),
                        'especializacoes' =>loopColunaAJAX(selecionaLimpo($con, "especializacao")),
                        'habilidades' => loopColunaAJAX(selecionaLimpo($con, "habilidades")),
                        'habitos' =>loopColunaAJAX(selecionaLimpo($con, "habitos")),
                        'idiomas'=>loopColunaAJAX(selecionaLimpo($con, "idiomas")),
                        'items' =>loopColunaAJAX(selecionaLimpo($con, "item")),
                        'patrono'=>loopColunaAJAX(selecionaLimpo($con, "patrono")),
                        'racas'=>loopColunaAJAX(selecionaLimpo($con, "raca"))
                     ];
    echo json_encode($sistema);