<?php

	function selecionaLimpo($con,$tabela){
		return mysqli_query($con, "SELECT * FROM $tabela");
	}
	function selecionaPorID($con,$tabela,$id){
		return mysqli_query($con, "SELECT * FROM $tabela WHERE $id");
	}
	function selecionaINNERJOINR1(){
		
	}
	function insereLimpo($con,$tabela,$id,$alvos,$objetos){
		$alvo = "";
		for($i=0;$i<sizeof($alvos);$i++){
			if($i<sizeof($alvos)-1){
				$alvo = $alvo.$alvos[$i].",";
			}
			else{
				$alvo = $alvo.$alvos[$i];
			};
		};
		$objeto = "";
		for($i=0;$i<sizeof($objetos);$i++){
			if($i<sizeof($objetos)-1){
				$objeto = $objeto.$objetos[$i].",";
			}
			else{
				$objeto = $objeto.$objetos[$i];
			};
		}
		return mysqli_query($con,"INSERT INTO $tabela(".$alvo.") values (".$objeto.") WHERE $id");
	}
	function atualizaLimpo($con,$tabela,$id,$alvos,$objetos){
		$alvo = "";
		for($i=0;$i<sizeof($alvos);$i++){
			if($i<sizeof($alvos)-1){
				$alvo = $alvo.$alvos[$i].",";
			}
			else{
				$alvo = $alvo.$alvos[$i];
			};
		};
		$objeto = "";
		for($i=0;$i<sizeof($objetos);$i++){
			if($i<sizeof($objetos)-1){
				$objeto = $objeto.$objetos[$i].",";
			}
			else{
				$objeto = $objeto.$objetos[$i];
			};
		}
		return mysqli_query($con,"UPDATE $tabela(".$alvo.") values (".$objeto.") WHERE $id");
	}
	function loopColunaAJAX($result,$vetor){
		while($coluna=mysqli_fetch_array($result)){
			array_push($vetor,$coluna);
		}
		return json_encode($vetor);
	}
?>