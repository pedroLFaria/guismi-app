<?php
	function concatenaSelect($vetor,$id){
		$texto = "";
		if(!$id){
			for($i=0;$i<sizeof($vetor);$i++){
				if($i<sizeof($vetor)-1){
					$texto = $texto."'".$vetor[$i]."',";
				}
				else{
					$texto = $texto."'".$vetor[$i]."'";
				};
			};
		}
		else{
			for($i=0;$i<sizeof($vetor);$i++){
				if($i%2==0){
					$texto = $texto.$vetor[$i]." = '";
				}
				else if($i<sizeof($vetor)-1){
					$texto = $texto.$vetor[$i]."' and ";
				}
				else{
					$texto = $texto.$vetor[$i]."'";
				}
			};
		}
		return $texto;
	}
	
	function selecionaLimpo($con,$tabela){
		return mysqli_query($con, "SELECT * FROM $tabela");
	}
	
	function selecionaPorID($con,$tabela,$id,$idN){
		return mysqli_query($con, "SELECT * FROM $tabela WHERE $id=$idN");
	}
	
	function selecionaWHERE($con,$tabelas,$ids,$campos){
		$tabela = concatenaSelect($tabelas,false);
		$id = concatenaSelect($ids,true);
		$campo = concatenaSelect($campos,false);
		return mysqli_query($con, "SELECT ".$campo." FROM ".$tabela." WHERE $id");
	}
	
	function insereAtualiza($con,$tabela,$id,$idN,$alvos,$objetos,$insere){
		$alvo = concatenaSelect($alvos,false);
		$objeto = concatenaSelect($objetos,false);
		if($insere){
			return mysqli_query($con,"INSERT INTO $tabela(".$alvo.") values (".$objeto.")");
		}
		else{
			return mysqli_query($con,"UPDATE $tabela(".$alvo.") values (".$objeto.") WHERE $id=$idN");
		}
	}
	
	function loopColunaAJAX($result,$vetor){
		while($coluna=mysqli_fetch_array($result)){
			array_push($vetor,$coluna);
		}
		return json_encode($vetor);
	}
?>