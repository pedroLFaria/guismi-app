<?php
	
	include "php\config.php";
	
	session_start();
	
	$loginNome = $_SESSION['loginNome'];
	$loginLogin = $_SESSION['loginLogin'];
	$loginSenha = $_SESSION['loginSenha'];
	
	if($loginNome != "" || $loginLogin != "" || $loginSenha != ""){
		$query = mysqli_query($con, "INSERT INTO jogador(nome,login,senha,mestre) values('$loginNome','$loginLogiin','$loginSenha',0)");
		if(mysqli_error($query)){
			echo "	
				<script> 
					alert('O seu login já existe!');
				</script>
				";
		}
			else{
				session_destroy();
				echo "	
					<script> 
						alert('".$loginNome." Cadastrado!');
						window.location = 'index.php';
					</script>
					";		
			}
	}
	else{
		session_destroy();
		echo "	
			<script> 
				alert('Erro ao inserir dados, tente novamente!');
			</script>
			";
	}

	
	
	