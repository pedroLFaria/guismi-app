<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<?php include "php\config.php";?>
	<script src="js/ficha-personagem.js"></script>
</head>
<body onload='inicializa()'>
    <label>nome:</label>
    <label ondblclick="modalTextBox(this)" id="nome_pers"></label>
    <input type="text" id="nome_pers_input" />
    <label>Raca:</label>
    <label ondblclick="modalTextBox(this)" id="raca_pers"></label>
	<select id="raca_pers_input" onchange='onChangeRaca(this.value)'><option>-</option>
	</select>
    <label>caminho:</label>
    <label ondblclick="modalTextBox(this)" id="caminhos_pers">Ladino</label>
    <select id="caminhos_pers_input"></select>
    <button>+</button>
    <label>idiomas:</label>
    <label ondblclick="modalTextBox(this)" id="idiomas_pers">Draconico</label>
    <select list='idiomas_pers_input'></select>
    <button>+</button>
    <label>sanidade:</label>
    <label ondblclick="modalTextBox(this)" id="sanidade_pers">0</label>
    <input type="number" id="sanidade_pers_input" min="-4" max="0" value="0" title="" />
    <label>Nivel</label>
    <label id="nivel_pers"></label>
    <input type="number" name="nivel_pers_input" />
    <label>Experiência</label>
    <label id="exp_pers"></label>
    <input type="number" name="exp_pers_input" />
    <span id='exp_pers_nivel'>9999</span>
    <label>Descendências</label>
    <ul>
        <li>Descendência 1</li>
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
                <td id="raca_for">0</td>
                <td><label id="dist_for"></label><input type="number" /></td>
                <td>0</td>
                <td id="tt_for">0</td>
                <td id="m5_for">0</td>
                <td id="m2_for">0</td>
            </tr>
            <tr>
                <th>CON</th>
                <td id="raca_con">0</td>
                <td><label id="dist_con"></label><input type="number" /></td>
                <td>0</td>
                <td id="tt_con">0</td>
                <td id="m5_con">0</td>
                <td id="m2_con">0</td>
            </tr>
            <tr>
                <th>AGI</th>
                <td id="raca_agi">0</td>
                <td><label id="dist_agi"></label><input type="number" /></td>
                <td>0</td>
                <td id="tt_agi">0</td>
                <td id="m5_agi">0</td>
                <td id="m2_agi">0</td>
            <tr>
                <th>DES</th>
                <td id="raca_des">0</td>
                <td><label id="dist_des"></label><input type="number" /></td>
                <td>0</td>
                <td id="tt_des">0</td>
                <td id="m5_des">0</td>
                <td id="m2_des">0</td>
            </tr>
            <tr>
                <th>INT</th>
                <td id="raca_int">0</td>
                <td><label id="dist_int"></label><input type="number" /></td>
                <td>0</td>
                <td id="tt_int">0</td>
                <td id="m5_int">0</td>
                <td id="m2_int">0</td>
            </tr>
            <tr>
                <th>SAB</th>
                <td id="raca_sab">0</td>
                <td><label id="dist_sab"></label><input type="number" /></td>
                <td>0</td>
                <td id="tt_sab">0</td>
                <td id="m5_sab">0</td>
                <td id="m2_sab">0</td>
            </tr>
            <tr>
                <th>CAR</th>
                <td id="raca_car">0</td>
                <td><label id="dist_car"></label><input type="number" /></td>
                <td>0</td>
                <td id="tt_car">0</td>
                <td id="m5_car">0</td>
                <td id="m2_car">0</td>
			</tr>
        </tbody>
    </table>
    <table name="">
        <caption>Hábitos</caption>
        <thead>
            <tr>
                <th id="tabela-habitos-compelta-habitos">Hábitos</th>
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
        <caption>Especialização</caption>
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
                Hábito:<label>XXX</label>
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
                Utilização:
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