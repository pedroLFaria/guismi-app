<!DOCTYPE html>
<html>
<head>
<?php include "php\config.php";?>
<script src="js/ficha-personagem.js"></script>
</head>
<body onload='inicializaRacas()'>
<?php 
	$result = mysqli_query($con, "SELECT * FROM ficha WHERE idFicha='3'");
	$row = mysqli_fetch_assoc($result);
	foreach($row as $key => $value)
	{
		$_POST[$key] = $value;
	}

?>
    <label>nome:</label>
    <label ondblclick="modalTextBox(this)"><?php echo $_POST['nome_pers'];?></label>
    <input type="text" value="<?php echo $_POST['nome_pers'];?>">
    <label>Raca:</label>
    <label ondblclick="modalTextBox(this)"> <?php echo $_POST['idRaca'];?> </label>
	<select name="raca" onchange='onChangeRaca(this.value)'>
	</select>
    <label>idiomas:</label>
    <label ondblclick="modalTextBox(this)">Draconico</label>
    <select list='idiomas'>
<?php	
	$result = mysqli_query($con,"SELECT * FROM idiomas");
	while($coluna = mysqli_fetch_array($result)){
		echo "<option value='".$coluna['idIdiomas']."'>".$coluna['nome']."</option>";
	}	
?>
	</select>
    <button>+</button>
    <label>sanidade:</label>
    <label ondblclick="modalTextBox(this)">0</label>
    <input type="number" name="sanidade" min="-4" max="0" value="0" title="" />
    <label>caminho:</label>
    <label ondblclick="modalTextBox(this)">Ladino</label>
    <select name="caminho"></select>
    <button>+</button>
    <label>Nivel</label>
    <input type="number" name="nivel_pers" />
    <label>Experiencia</label>
    <input type="number" name="exp_pers" />
    <span>9999</span>
    <label>Descend�ncias</label>
    <ul>
        <li>Descend�ncia 1</li>
    </ul>
    <table> <!-- quadro de combate -->
        <caption>Quadro</caption>
        <tbody>
            <tr>
                <th>Sangue</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>Vigor</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>Mana</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th>Regen. Sangue</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>Regen. Vigor</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>Regen. Mana</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <table>
        <caption>Atributos</caption>
        <thead>
            <tr>
                <th>Atributos</th>
                <th>R</th>
                <th>DS</th>
                <th>B.Gerais</th>
                <th>TT</th>
                <th>M5</th>
                <th>M2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>FOR</th>
                <td>0
				
				</td>
                <td><label><?php echo $_POST['dist_for'];?></label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>CON</th>
                <td>0</td>
                <td><label><?php echo $_POST['dist_con'];?></label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>AGI</th>
                <td>0</td>
                <td><label><?php echo $_POST['dist_agi'];?></label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>DES</th>
                <td>0</td>
                <td><label>0</label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>INT</th>
                <td>0</td>
                <td><label>0</label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>SAB</th>
                <td>0</td>
                <td><label>0</label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <th>CAR</th>
                <td>0</td>
                <td><label>0</label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <table name="">
        <caption>Habitos</caption>
        <thead>
            <tr>
                <th id="tabela-habitos-compelta-habitos">H�bitos</th>
                <th>G</th>
                <th>DT</th>
                <th>BG</th>
                <th>TT</th>
                <th>M10</th>
                <th>M5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>XXXX</th>
                <td>0</td>
                <td><label>0</label><input type="number" /></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <button>+</button>
    <table>
        <caption>Especializa��o</caption>
        <tbody>
            <tr>
                <td>ESP:XXXX</td>
            </tr>
        </tbody>
    </table>
    <table class="tabela-atributos col-4">
        <caption>Defesas</caption>
        <tr>
            <th>Reflex</th>
            <td>1</td>
        </tr>
        <tr>
            <th>fortitude</th>
            <td>1</td>
        </tr>
        <tr>
            <th>Vontade</th>
            <td>1</td>
        </tr>
    </table>
    <table>
        <caption>Habilidades</caption>
        <tr>
            <th>Nome Habilidade<input type="text" value="Nome Habilidade"></th>
            <td>AtAc.:
                <label>FOR</label>
                <select>
                    <option>FOR</option>
                    <option>CON</option>
                    <option>AGI</option>
                    <option>DES</option>
                    <option>INT</option>
                    <option>SAB</option>
                    <option>CAR</option>
                </select>
                Mod.:<label>0</label>
                Tipo<span></span><input type="text" />
            </td>
            <td>
                H�bito:<label>XXX</label>
                <select>

                </select>
                M10:<label></label>
                5:<label></label>
            </td>
            <td>
                Gastos:
                <label></label>
                <label></label>
                <label></label>
            </td>
            <td>
                Utiliza��o:
                <input type="text" />
                <label></label>
            </td>
            <td>
                <label nome="desc_hab">
                </label>
                <textarea>
                    descri��o da Habilidade
                </textarea>
            </td>
            <td>
                <label></label>
                <input type="text" nome="pre_req"/>
            </td>
            
        </tr>
    </table>
</body>
</html>