<?php
/*SELECT FICHA[APROVADO]*/

$selectFicha = "SELECT ficha.nome_pers,
CASE ficha.idcidade
	WHEN cidade.idcidade THEN cidade.nome
END AS nome_cidade,
ficha.img,ficha.idade,ficha.afiliacao,ficha.cla,ficha.sorte_dia,ficha.dist_for,ficha.dist_con,ficha.dist_agi,ficha.dist_des,ficha.dist_int,ficha.dist_sab,ficha.dist_car,ficha.nivel_pers,ficha.exp_pers,ficha.pers_desc,ficha.pers_hist,ficha.nota,
CASE ficha.idsanidade
	WHEN sanidade.idsanidade THEN sanidade.nome
END AS nome_sanidade,
CASE ficha.idreputacao
	WHEN reputacao.idreputacao THEN reputacao.nome
END AS nome_reputacao,
reputacao.efeito
FROM ficha
LEFT JOIN cidade ON ficha.idcidade = cidade.idcidade
LEFT JOIN sanidade ON ficha.idsanidade = sanidade.idsanidade
LEFT JOIN reputacao ON ficha.idreputacao = reputacao.idreputacao
WHERE ficha.idFicha = ";

/*SELECT RAวA[APROVADO]*/

$selectRaca = "SELECT raca.*
FROM ficha
LEFT JOIN raca ON ficha.idraca = raca.idraca
WHERE ficha.idFicha = ";

/*SELECT DESCENDENCIAS[APROVADO]*/

$selectDescendencia = "SELECT descendencia.* FROM ficha
LEFT JOIN descendencia_has_ficha ON descendencia_has_ficha.idficha = ficha.idficha
LEFT JOIN raca_has_descendencia ON raca_has_descendencia.idraca = ficha.idraca
LEFT JOIN descendencia ON raca_has_descendencia.iddescendencia = descendencia.iddescendencia OR descendencia_has_ficha.iddescendencia = descendencia.iddescendencia
WHERE ficha.idficha = ";

/*SELECT HABITOS[APROVADO]*/

$selectHabitos = "SELECT habitos.idHabitos,habitos.nome,habitos.desc_hab,ficha_has_habitos.qtd_fic_hab,caminho_has_habitos.qtd_cam_hab,descendencia_has_habitos.qtd_desc_hab,raca_has_habitos.qtd_rac_hab
FROM ficha
LEFT JOIN ficha_has_caminho ON ficha_has_caminho.idFicha = ficha.idFicha
LEFT JOIN descendencia_has_ficha ON descendencia_has_ficha.idFicha = ficha.idFicha
LEFT JOIN ficha_has_habitos ON ficha_has_habitos.idFicha = ficha.idFicha
LEFT JOIN raca_has_habitos ON raca_has_habitos.idRaca = ficha.idRaca
LEFT JOIN caminho_has_habitos ON caminho_has_habitos.idCaminho = ficha_has_caminho.idCaminho
LEFT JOIN descendencia_has_habitos ON descendencia_has_habitos.idDescendencia = descendencia_has_ficha.idDescendencia
LEFT JOIN habitos ON habitos.idHabitos = ficha_has_habitos.idHabitos
OR habitos.idHabitos = raca_has_habitos.idHabitos
OR habitos.idHabitos = caminho_has_habitos.idHabitos
OR habitos.idHabitos = descendencia_has_habitos.idHabitos
WHERE ficha.idFicha = ";

/*SELECT HABILIDADES[APROVADO]*/

$selectHabilidade = "SELECT habilidades.*
FROM ficha
LEFT JOIN habilidades_has_ficha ON habilidades_has_ficha.idFicha = ficha.idFicha
LEFT JOIN raca_has_habilidades ON raca_has_habilidades.idraca = ficha.idraca
LEFT JOIN descendencia_has_ficha ON descendencia_has_ficha.idficha = ficha.idficha
LEFT JOIN raca_has_descendencia ON raca_has_descendencia.idraca = ficha.idraca
LEFT JOIN descendencia_has_habilidades ON descendencia_has_ficha.idDescendencia = descendencia_has_habilidades.idDescendencia OR raca_has_descendencia.idDescendencia = descendencia_has_habilidades.idDescendencia
LEFT JOIN habilidades ON habilidades.idhabilidades
WHERE ficha.idficha = ";

/*------ SELECT ADICIONAL SITUACAO/HABILIDADES*/
$selectSituacaoHabilidade = "SELECT situacao.*
FROM habilidades
LEFT JOIN situacao_has_habilidades ON habilidades.idhabilidades = situacao_has_habilidades.idhabilidades
LEFT JOIN situacao ON situacao_has_habilidades.idsituacao = situacao.idsituacao
WHERE habilidades.idhabilidades = ";

/*------ SELECT ADICIONAL ACAO/HABILIDADES*/
$selectAcaoHabilidade = "SELECT acao.*
FROM habilidades
LEFT JOIN acao_has_habilidades ON habilidades.idhabilidades = acao_has_habilidades.idhabilidades
LEFT JOIN acao ON acao_has_habilidades.idacao = acao.idacao
WHERE habilidades.idhabilidades = ";

/*SELECT ESPECIALIZACAO[]*/
$selectEspecializacao = "SELECT especializacao.*,habitos.idHabitos FROM ficha
LEFT JOIN ficha_has_caminho ON ficha_has_caminho.idficha = ficha.idFicha
LEFT JOIN especializacao_has_caminho ON especializacao_has_caminho.idcaminho = ficha_has_caminho.idcaminho
LEFT JOIN raca_has_especializacao ON raca_has_especializacao.idraca = ficha.idraca
LEFT JOIN ficha_has_especializacao ON ficha_has_especializacao.idFicha = ficha.idficha
LEFT JOIN especializacao ON ficha_has_especializacao.idEspecializacao = especializacao.idEspecializacao
OR especializacao.idEspecializacao = especializacao_has_caminho.idEspecializacao
OR especializacao.idEspecializacao = raca_has_especializacao.idEspecializacao
LEFT JOIN habitos_has_especializacao ON habitos_has_especializacao.idEspecializacao = especializacao.idEspecializacao
LEFT JOIN habitos ON habitos_has_especializacao.idHabitos = habitos.idHabitos
WHERE ficha.idFicha = ";


/*SELECT TRACOS_RACIAIS[APROVADO]*/

$selectTracosRacias = "SELECT tracos_raciais.*
FROM ficha
LEFT JOIN raca ON ficha.idraca = raca.idraca
LEFT JOIN tracos_raciais ON raca.idraca = tracos_raciais.idraca
WHERE ficha.idficha = ";

/*SELECT CAMINHO[APROVADO]*/

$selectCaminho = "SELECT caminho.*
FROM ficha
LEFT JOIN ficha_has_caminho ON ficha.idficha = ficha_has_caminho.idficha
LEFT JOIN caminho ON ficha_has_caminho.idcaminho = caminho.idcaminho
WHERE ficha.idficha = ";

/*SELECT INVENTARIO[APROVADO]*/

$selectInventario  = "SELECT inventario.*
FROM ficha
LEFT JOIN ficha_has_inventario ON ficha.idficha = ficha_has_inventario.idficha
LEFT JOIN inventario ON ficha_has_inventario.idinventario = inventario.idinventario
WHERE ficha.idficha = ";

/*SELECT ITEM[APROVADO]*/

$selectItem = "SELECT item.*,inventario_has_item.quantidade
FROM ficha
LEFT JOIN ficha_has_inventario ON ficha.idficha = ficha_has_inventario.idficha
LEFT JOIN inventario_has_item ON ficha_has_inventario.idinventario = inventario_has_item.idinventario
LEFT JOIN item ON inventario_has_item.iditem = item.iditem
WHERE ficha.idficha = ";


/*SELECT SITUAวรO[APROVADO]*/

$selectSituacao = "SELECT situacao.*
FROM ficha
LEFT JOIN ficha_has_situacao ON ficha.idficha = ficha_has_situacao.idficha
LEFT JOIN situacao ON ficha_has_situacao.idsituacao = situacao.idsituacao
WHERE ficha.idficha = ";

