<?php
	$result = mysqli_query($con, "SELECT ficha.idFicha,ficha.nome_pers,ficha.img,ficha.idade,raca.nome FROM ficha,raca WHERE idJogador = '".$_SESSION['LoginID']."' and ficha.idRaca=raca.idRaca");
	while($coluna=mysqli_fetch_array($result)){
		echo "
			<button class='ficha-sel' name='idFicha' value=".$coluna['idFicha'].">
			<label class='botao-texto'>
				<label>Nome: </label><h3>".$coluna['nome_pers']."</h3>
				<label>Raça: </label><h5>".$coluna['nome']."</h5>
				<label>Idade: </label><h5>".$coluna['idade']." Anos</h5>
			</label>
				<img src='".$coluna['img']."'/>
			</button><br>
			";
	}
