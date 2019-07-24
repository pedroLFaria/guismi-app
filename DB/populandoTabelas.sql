-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 24-Jul-2019 às 21:45
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guismi`
--

--
-- Extraindo dados da tabela `acao`
--

INSERT INTO `acao` (`IDACAO`, `NOMEACAO`) VALUES
(1, 'Ação Mínima'),
(2, 'Ação Padrão'),
(3, 'Ação de Movimento'),
(4, 'Ação Livre');

--
-- Extraindo dados da tabela `caminho`
--

INSERT INTO `caminho` (`IDCAMINHO`, `NOMECAMINHO`, `DESCCAMINHO`) VALUES
(1, 'Guerreiro', 'Guerreiro são batalhadores astutos que usam corpo-a-corpo como maior arma, é essencial um bom ataque e grande mobilidade, estes por sua vez utilizam armadura, tanto leve quanto intermediaria, os atributos principais deste caminho são Força, Destreza e Constituição.');

--
-- Extraindo dados da tabela `caminho_has_especializacao`
--

INSERT INTO `caminho_has_especializacao` (`IDESPECIALIZACAO`, `IDCAMINHO`) VALUES
(1, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1);

--
-- Extraindo dados da tabela `caminho_has_habilidade`
--

INSERT INTO `caminho_has_habilidade` (`IDCAMINHO`, `IDHABILIDADE`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14);

--
-- Extraindo dados da tabela `cidade`
--

INSERT INTO `cidade` (`IDCIDADE`, `NOMECIDADE`, `DESCCIDADE`, `POPCIDADE`) VALUES
(1, 'Curitiba Hipotetica', 'Hipotetacratenusa', '123 milumanos');

--
-- Extraindo dados da tabela `descendencia`
--

INSERT INTO `descendencia` (`IDDESCENDENCIA`, `NOMEDESCENDENCIA`, `DESCDESCENDENCIA`) VALUES
(1, 'Resistência Física', 'Ataques físicos causam a metade do dano no personagem.'),
(2, 'Corpo Arcano', 'Seu corpo é formado de energia magica mutável, podendo alterar sua forma e garantindo resistência magica +2.'),
(3, 'Ampliador de Mana Etherea ', 'Seu corpo é uma grande fonte de mana, o potencial de mana é aumentado para 7 vezes e pode usar sua vida como mana, porém devido a isto não podem conjurar magia de sangue.'),
(4, 'Toque Arcano', 'Por ser de Mana, seu toque pode conceder mana extra para uma criatura, gastando Sangue na quantia doada.');

--
-- Extraindo dados da tabela `especializacao`
--

INSERT INTO `especializacao` (`IDESPECIALIZACAO`, `NOMEESPECIALIZACAO`, `DESCESPECIALIZACAO`) VALUES
(1, 'Espada Curta', 'Tecnica na utilização de espadas curtas.'),
(3, 'Runa', 'Conhecimento especializado em runas.'),
(4, 'Negociar', 'Conhecimento especializado em negociação.'),
(5, 'Magia Arcana', 'Conhecimento especializado em magia arcana.'),
(6, 'Ritual', 'Conhecimento especializado em rituais.'),
(7, 'Espada Longa', 'Tecnica em utilização de espadas longas.'),
(8, 'Machado Leve', 'Tecnica em utilização de machados leves.'),
(9, 'Machado Pesado', 'Tecnica em utilização de machados pesados.'),
(10, 'Armadura Leve', 'Tecnica em utilização de armaduras leves.'),
(11, 'Armadura Pesada', 'Tecnica em utilização de armaduras pesadas.'),
(12, 'Arco Longo', 'Especialização no uso de arcos longos.'),
(13, 'Arco Curto', 'Especialização no uso de arcos curtos.'),
(14, 'Escudo Leve', 'Especialização no uso de escudos leves.');

--
-- Extraindo dados da tabela `ficha`
--

INSERT INTO `ficha` (`IDFICHA`, `IDRACA`, `IDCIDADE`, `IDJOGADOR`, `NOMEPERSONAGEM`, `IMG`, `IDADE`, `AFILIACAO`, `CLA`, `SORTEDIA`, `DISTFORCA`, `DISTCONSTITUICAO`, `DISTAGILIDADE`, `DISTDESTREZA`, `DISTINTELIGENCIA`, `DISTSABEDORIA`, `DISTCARISMA`, `NIVELPERSONAGEM`, `EXPPERSONAGEM`, `DESCPERSONAGEM`, `HISTPERSONAGEM`, `NOTA`, `IDSANIDADE`) VALUES
(1, 3, 1, 1, 'Personagem Hipotetico 1', 'https://pbs.twimg.com/profile_images/1068864058768658433/2yYNwEgb_400x400.jpg', '123', 'Nao tem', 'Nao tem2', '4', '1', '2', '3', '4', '5', '6', '7', 0, 0, 'Grandes olhos pequenos', 'Nasceu um dia', '100', NULL),
(2, 1, 1, 1, 'Personagem Hipotetico 2', 'https://pbs.twimg.com/media/DrxYNoxX0AMETWp.jpg:large', '321', 'Nao ', 'Nao 2', '1', '4', '6', '7', '9', '0', '1', '8', 0, 0, 'Grandes olhos pequenos', 'Nasceu um dia', '100', NULL),
(3, 1, 1, 1, 'Personagem Hipotetico 3 de nome grande pracarai', 'https://pbs.twimg.com/media/Ds4QeCtWoAEMNah.jpg:large', '321', 'Nao ', 'Nao 2', '1', '4', '6', '7', '9', '0', '1', '8', 0, 0, 'Grandes olhos pequenos', 'Nasceu um dia', '100', NULL);

--
-- Extraindo dados da tabela `ficha_has_caminho`
--

INSERT INTO `ficha_has_caminho` (`IDFICHA`, `IDCAMINHO`) VALUES
(1, 1);

--
-- Extraindo dados da tabela `ficha_has_descendencia`
--

INSERT INTO `ficha_has_descendencia` (`IDDESCENDENCIA`, `IDFICHA`) VALUES
(1, 1);

--
-- Extraindo dados da tabela `ficha_has_habilidade`
--

INSERT INTO `ficha_has_habilidade` (`IDHABILIDADE`, `IDFICHA`) VALUES
(1, 1);

--
-- Extraindo dados da tabela `ficha_has_habito`
--

INSERT INTO `ficha_has_habito` (`IDFICHA`, `IDHABITO`, `QTDFICHAHABITO`) VALUES
(1, 1, 50),
(2, 37, 2);

--
-- Extraindo dados da tabela `ficha_has_inventario`
--

INSERT INTO `ficha_has_inventario` (`IDFICHA`, `IDINVENTARIO`) VALUES
(1, 1);

--
-- Extraindo dados da tabela `ficha_has_situacao`
--

INSERT INTO `ficha_has_situacao` (`IDFICHA`, `IDSITUACAO`) VALUES
(1, 1);

--
-- Extraindo dados da tabela `gasto`
--

INSERT INTO `gasto` (`IDGASTO`, `NOMEGASTO`) VALUES
(1, 'Sangue'),
(2, 'Vigor'),
(3, 'Mana');

--
-- Extraindo dados da tabela `habilidade`
--

INSERT INTO `habilidade` (`IDHABILIDADE`, `NOMEHABILIDADE`, `ATRATACANTE`, `TIPOHABILIDADE`, `UTIHABILIDADE`, `DESCHABILIDADE`, `PREREQUISITO`, `NIVELREQUERIDO`) VALUES
(1, 'Declaração de Batalha', 'For', 'Ativa', 'Uma vez por encontro', 'Observa profundamente nos olhos de um oponente, que por sua vez, teme o pior...\r\n\r\nEscolhe um inimigo (no nível 25 pode escolher dois) no campo de visão e declara uma batalha, o declarante aplica um dano extra, por ataque, de +1/+2/+4/+8 respectivamente nos níveis 1/15/40/50.\r\n', NULL, '1'),
(2, 'Espasmos da Guerra', 'For', 'Ativa', 'Uma vez por encontro', 'Dispara dois golpes muitos forte em uma área a sua frente, como se estivesse em frenesi...\r\n\r\nGolpeia em uma área de cone com sua arma, acertando até dois inimigos a frente, aplicando o dano da arma, no nível 25, aplica 2 vezes o dano.', NULL, '1'),
(3, 'Ataque em Carga', 'Des', 'Ativa', 'Uma vez por encontro', 'Empunha sua espada para desferir um golpe que irá mudar a batalha...\r\n\r\nConcentra um ataque contra um inimigo, o que causa o dobro (triplo, no nível 25) de dados de arma em um inimigo adjacente.', NULL, '5'),
(4, 'Padrão de luta', 'Des', 'Passiva', NULL, 'Minha arma é minha alma...\r\n\r\nEscolhe uma arma que tenha o Hábito, quando a utilizando, aplica 1d4/2d6/4d4 nos níveis 5/30/50,de dano com a arma escolhida', NULL, '5'),
(5, 'Golpes Fulminantes', 'Des', 'Ativa', 'Uma vez por encontro', 'Entra em frenesi, golpeando todos os inimigos em sua volta, lembrando muito o ataque de um antigo guerreiro de capuz verde...\r\n\r\nAtaca todos os inimigos adjacentes ao mesmo tempo em uma tempestade de golpes que aplicam Lento (x:2; y:5) aos inimigos e causa o dano da arma +2d4/+2d6/+2d8 nos níveis 15/30/50.', NULL, '15'),
(6, 'Maré de Ferro', 'Des', 'Ativa', 'Uma vez por encontro.', 'Lança uma saraivada contra o oponente que fica enfraquecido e se machuca ainda mais a cada golpe...\r\n\r\nDesfere três golpes com a arma utilizada, marca o inimigo no primeiro golpe, causando +2/+4/+5 nos próximos golpes contra este oponente, nos níveis 15/25/50.', NULL, '15'),
(7, 'Lutador admirável', 'Des', 'Passiva', NULL, 'Se torna um gênio do combate, podendo se esquivar muito bem dos golpes alheios...\r\n\r\nGanha um bônus na defesa Reflexo de 10/15 nos níveis 25/40, também ganha bônus na iniciativa de 2/5, nos níveis 25/40.', NULL, '25'),
(8, 'Cólera do Grifo', 'Des', 'Ativa', 'Uma vez por dia', 'Ataca o inimigo tantas vezes que o barulho do metal se torna tão agudo quanto o grito de um Grifo que por sua vez enfraquece a armadura do oponente...\r\n\r\nGolpeia diversas vezes o oponente, até que o mesmo deixe um ponto vulnerável a mostra, causa dano da arma + 1d6/1d8/1d10, nos níveis 25/40/50 e diminui a armadura do oponente em 10%/20% nos níveis 25/45.', NULL, '25'),
(9, 'Imperdoável', 'For', 'Ativa', 'Uma vez por dia', 'Se lança com ódio para cima de um inimigo e causa um grande estrago na chegada...\r\n\r\nParte em direção a um oponente escolhido, em até 4 quadrados de distância, causa 5 vezes o número de dados da arma.', NULL, '40'),
(10, 'Supremacia da Retaliação', 'Des', 'Ativa', 'Uma vez por dia', 'Acumula ira e a libera em um oponente que fica amedrontado com a situação...\r\n\r\nGolpeia com força o inimigo, causando quatro vezes o número de dadosda arma e aplica Assustado (x=5).', NULL, '40'),
(11, 'Demônio em Combate', 'Des', 'Ativa', 'Uma vez por dia', 'Pula de inimigo em inimigo balançando sua arma e causando muito dano...\r\n\r\nCom sua experiência e vontade em combates, golpeia até 3 inimigos que estejam até 3 quadrados de distância um do outro, causando duas vezes o dano da arma em cada oponente, tem chance de aplicar Assustado de 30% (x=10).', NULL, '50'),
(12, 'Glória do Rei do Trovão', 'Des', 'Ativa', 'Uma vez por dia', 'Sua fé em Talos faz seus golpes ficarem eletrizados e causam muito dano aos inimigos, além de proverem uma velocidade incrível por um curto período...\r\n\r\nGolpeia habilmente até dois oponentes adjacentes, causando dobro de dano da arma e causando 10 de dano elétrico em todos os quadrados adjacentes, pode também fazer uma jogada adicional de reajuste com o dobro da mobilidade', 'Servo de Talos', '50'),
(13, 'Ascensão do Combatente', 'Car', 'Ativa', 'Uma vez por dia', 'Um inimigo é alvejado pelo guerreiro, este inimigo sofrerá com a batalha que está por vir...\r\n\r\nNo início do encontro, desafia um oponente, durante todo o encontro o guerreiro e seus aliados tem dano aumentado (+2d6) em ataques neste oponente.', NULL, '50'),
(14, 'Impacto Brutal', 'Des', 'Ativa', 'Duas vezes por dia', 'Se move com audácia e golpeia um inimigo com muita força...\r\n\r\nSalta na direção do oponente, deixando-o atordoado (x=10), e causando o triplo do dano da arma, além de fazer o inimigo sangrar (x=2).', NULL, '50');

--
-- Extraindo dados da tabela `habilidade_has_acao`
--

INSERT INTO `habilidade_has_acao` (`IDACAO`, `IDHABILIDADE`) VALUES
(1, 1),
(1, 13),
(2, 2),
(2, 3),
(2, 5),
(2, 6),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(2, 14),
(3, 3),
(3, 9),
(3, 12),
(3, 14);

--
-- Extraindo dados da tabela `habilidade_has_situacao`
--

INSERT INTO `habilidade_has_situacao` (`IDSITUACAO`, `IDHABILIDADE`) VALUES
(1, 1);

--
-- Extraindo dados da tabela `habito`
--

INSERT INTO `habito` (`IDHABITO`, `NOMEHABITO`, `DESCHABITO`) VALUES
(1, 'Explorar', 'Conhecimento em exploração.'),
(2, 'Arcanismo', 'Conhecimento em artes arcanas, como rituais, forja de runas, entre outros...'),
(3, 'Magia', 'Habilidade em manipulação dos adversos tipos de magia.'),
(4, 'Corpo-a-Corpo', 'Habilidade em lutar próximo ao oponente.'),
(5, 'Á distância', 'Conhecimento em utilização de armas de a distancia.'),
(8, 'Armadura', 'Proeza em utilizar armaduras.'),
(9, 'Escudos', 'Conhecimento em utilização de escudos.'),
(10, 'Armadilha', 'Habilidade com armadilhas.'),
(11, 'Astrologia', 'Conhecimentos sobre astrologia.'),
(12, 'Decifrar', 'Habilidade em decifrar.'),
(13, 'Engenharia', 'Conhecimento em engenharias.'),
(14, 'História', 'Conhecimento sobre história do mundo.'),
(15, 'Medicina', 'Conhecimento em medicina.'),
(16, 'Metalurgia', 'Conhecimento em metalurgia.'),
(17, 'Montar', 'Habilidade em montaria.'),
(18, 'Natureza', 'Conhecimentos sobre a natureza.'),
(19, 'Religião', 'Conhecimento sobre as religiões.'),
(20, 'Sobrevivência', 'Habilidade de sobrevivência.'),
(21, 'Trovar', 'Habilidade com trova.'),
(22, 'Arrombar', 'Habilidade em abrir fechaduras.'),
(23, 'Desenhar', 'Habilidade em desenho.'),
(24, 'Diplomacia', 'Conhecimento em diplomacia.'),
(25, 'Dirigir', 'Habilidade dirigir quaisquer construto.'),
(26, 'Domar', 'Conhecimento em doma.'),
(28, 'Lecionar', 'Conhecimento sobre ensinamentos.'),
(29, 'Ler e Escrever', 'Conhecimento em leitura e escrita.'),
(30, 'Percepção', 'Habilidade de perceber.'),
(31, 'Psiquismo', 'Habilidade psiquica.'),
(32, 'Caçar', 'Habilidade em caça.'),
(33, 'Escavar', 'Conhecimento sobre escavações.'),
(34, 'Lavrar', 'Habilidade em lavra.'),
(35, 'Lenhar', 'Habilidade em cortar arvores.'),
(36, 'Minerar', 'Habilidade em extrair minérios.'),
(37, 'Alquimia', 'Habilidade em produzir químicos.'),
(38, 'Construir', 'Habilidade em construções.'),
(39, 'Cozinhar', 'Habilidade na cozinha.'),
(40, 'Forjar', 'Habilidade em forja.'),
(41, 'Marcenaria', 'Habilidade em marcenaria.'),
(42, 'Atletismo', 'Habilidade física.'),
(43, 'Artes Marciais', 'Conhecimento em artes marciais.'),
(44, 'Furtividade', 'Conhecimento sobre ocultar.'),
(45, 'Dançar', 'Conhecimento sobre danças.'),
(46, 'Nadar', 'Conhecimento sobre nadar.'),
(47, 'Roubar', 'Conhecimento sobre punga.'),
(48, 'Tolerância', 'Habilidade do organismo resistir a fatores externos (ex.: veneno).');

--
-- Extraindo dados da tabela `habito_has_especializacao`
--

INSERT INTO `habito_has_especializacao` (`IDHABITO`, `IDESPECIALIZACAO`) VALUES
(1, 1),
(2, 3),
(2, 6),
(3, 5),
(24, 4);

--
-- Extraindo dados da tabela `idioma`
--

INSERT INTO `idioma` (`IDIDIOMA`, `NOMEIDIOMA`, `DESCIDIOMA`) VALUES
(1, 'Abissal', 'Idioma falado pelos seres supremos do abismo, pode ser usada em magias.'),
(2, 'Comum', 'Língua falada por toda parte do mundo, quase todas as raças falam.'),
(3, 'Vorauchein', 'Língua falada por Ethereos, sua escrita é feita com mana e por meio de hieroglifos quadrados.'),
(4, 'Anjo', 'Língua dos anjos.'),
(5, 'Arcanjo', 'Idioma falado pelos arcanjos tem pouca diferença com a dos anjos.'),
(6, 'Serafim', 'Língua destinada ao alto escalão dos anjos, os serafins não se assemelham a anjo nem á arcanjo.'),
(7, 'Supernal', 'Língua Utilizada pelos deuses, pode ser usada em magias.'),
(8, 'Dwarf', 'Idioma falado pelos anões da montanha.'),
(9, 'Duergar', 'Lingua falada pelos anões cinzentos.'),
(10, 'Niergaus', 'Idioma falado pelos anões nebulosos.'),
(11, 'Ywerfgar', 'Idioma falado pelos anões tempestuosos.'),
(12, 'Agnar', 'Língua semelhante ao anão primitivo, porém com mais palavras.'),
(13, 'Azer', 'Idioma falado pelos anões do fogo.'),
(14, 'Cvarf', 'Língua falada entre os anões selvagens.'),
(15, 'Anão Primitivo', 'Primeira língua utilizada pelos anões, já não é mais utilizada.'),
(16, 'Alto Elfo', 'Língua falada pelos altos elfos.'),
(17, 'Elfo da Floresta', 'Idioma falado pelos elfos da floresta.'),
(18, 'Elfo Aquático', 'Língua comum entre os elfos aquáticos.'),
(19, 'Elfo do Céu', 'Idioma falado entre os elfos do céu.'),
(20, 'Elfo Cinza', 'Idioma falado pelos Elfos Cinzas.'),
(21, 'Drow', 'Idioma falado entre os drows.'),
(22, 'Diabo', 'Língua comum dos infernos.'),
(23, 'Succubus', 'Variante de diabo utilizada por succubus e inccubus.'),
(24, 'Primordial', 'Língua utilizada pelos primordiais e elementais.'),
(25, 'Draconico', 'Idioma natural entre os dragões e descendentes.'),
(26, 'Eladrin', 'Idioma falado pelos eladrin.'),
(27, 'Pixie', 'Idioma falado pelas fadas.'),
(28, 'Dríade', 'Idioma falado pelas dríades.'),
(29, 'Treant', 'Idioma falado pelos treants.'),
(30, 'Brownie', 'Idioma falado entre brownies.'),
(31, 'Centauro', 'Lingua falada pelos centauros.'),
(32, 'Ilithid', 'Idioma escrito usado pelos devoradores de mente.'),
(33, 'Shadar-kai', 'Idioma falado pelos shadar-kai.'),
(34, 'Bugbear', 'Lingua falada pelos bugbears.'),
(35, 'Sereia', 'Idioma falado pelas sereias.'),
(36, 'Sirena', 'Idioma falado pelas sirena.'),
(37, 'Tritão', 'Idioma falado pelos tritões.'),
(38, 'Kuo-toa', 'Idioma falado pelos kuo-toas.'),
(39, 'Sahuagin', 'Idioma falado pelos sahuagin.'),
(40, 'Gnomo', 'Idioma falado pelos gnomos.'),
(41, 'Gigante', 'Idioma falado pelos gigantes.'),
(42, 'Halfling', 'Idioma falado pelos halflings.'),
(43, 'Goblin', 'Idioma falado pelos goblins.'),
(44, 'Hobgoblin', 'Idioma falado pelos hobgoblins.'),
(45, 'Orc', 'Idioma falado pelos orcs.'),
(46, 'Gnoll', 'Idioma falado pelos gnolls.'),
(47, 'Trog', 'Idioma falado pelos trogloditas.'),
(48, 'Githyanki', 'Idioma falado pelos githyanki.'),
(49, 'Githzerai', 'Idioma falado pelos githzerai.'),
(50, 'Arakocra', 'Idioma falado pelos arakocra.'),
(51, 'Cn\'ak', 'Idioma falado pelos cn\'ak.'),
(52, 'Gathlain', 'Idioma falado pelos gathlain.'),
(53, 'Ghoran', 'Idioma falado pelos Ghoran.'),
(54, 'Gillmen', 'Idioma falado pelos Gillmen.'),
(55, 'Kasatha', 'Idioma falado pelos Kasatha.'),
(56, 'Lashunta', 'Idioma falado pelos Lashunta.'),
(57, 'Merfolk', 'Idioma falado pelos Merfolk.'),
(58, 'Oread', 'Idioma falado pelos Oread.'),
(59, 'Quori', 'Idioma falado pelos Quori.'),
(60, 'Sahuagin', 'Idioma falado pelos Sahuagin.'),
(61, 'Sylph', 'Idioma falado pelos Sylph.'),
(62, 'Tengu', 'Idioma falado pelos Tengu.'),
(63, 'Thri-Kreen', 'Idioma falado pelos Thri-Kreen.'),
(64, 'Undine', 'Idioma falado pelos Undine.'),
(65, 'Vanara', 'Idioma falado pelos Vanara.'),
(66, 'Wilden', 'Idioma falado pelos Wilden.');

--
-- Extraindo dados da tabela `inventario`
--

INSERT INTO `inventario` (`IDINVENTARIO`, `NOMEINVENTARIO`) VALUES
(1, 'Bolsão');

--
-- Extraindo dados da tabela `inventario_has_item`
--

INSERT INTO `inventario_has_item` (`IDINVENTARIO`, `IDITEM`, `QTDINVENTARIOITEM`) VALUES
(1, 1, 5);

--
-- Extraindo dados da tabela `item`
--

INSERT INTO `item` (`IDITEM`, `NOMEITEM`, `DESCITEM`, `PESOITEM`, `VALORMAGICO`, `VALORITEM`, `MOEDA`, `ICONEITEM`) VALUES
(1, 'Pedra', 'PEsada pra caralho', '999.99', '0', '12', 0, 'https://img.fireden.net/v/thumb/1502/37/1502378136353s.jpg');

--
-- Extraindo dados da tabela `jogador`
--

INSERT INTO `jogador` (`IDJOGADOR`, `NOMEJOGADOR`, `LOGIN`, `SENHA`, `MESTRE`) VALUES
(1, 'Jogador Hipotetico', 'hipojogador', 'hipopocratenusa', 0),
(7, 'testando', '', 'testando', 0);

--
-- Extraindo dados da tabela `patrono`
--

INSERT INTO `patrono` (`IDPATRONO`, `NOMEPATRONO`, `DESCPATRONO`) VALUES
(2, 'Azuth', 'https://forgottenrealms.fandom.com/wiki/Azuth');

--
-- Extraindo dados da tabela `raca`
--

INSERT INTO `raca` (`IDRACA`, `NOMERACA`, `RARIDADERACA`, `DESCRACA`, `LONGEVIDADERACA`, `TRACOSFISIOLOGICOS`, `CULTURARACA`, `HISTORIARACA`, `RACAFORCA`, `RACACONSTITUICAO`, `RACAAGILIDADE`, `RACADESTREZA`, `RACAINTELIGENCIA`, `RACASABEDORIA`, `RACACARISMA`, `SANGUE`, `VIGOR`) VALUES
(1, 'Raça Hipotetica1', 'Normal 1', 'Hipoteraça', '500', 'Olhos graaandes', 'Fazem dança da chuva', 'Morreu um monte de gente numa guerra', '1', '2', '3', '4', '5', '6', '7', '10', '11'),
(2, 'Raça Hipotetica2', 'Normal 2', 'Hipoteraça 2', '123123', 'Barriguinha', 'Guerras', 'Ninguem morreu', '9', '8', '7', '6', '5', '4', '3', '12', '13'),
(3, 'Ethereos (Niergaus)', 'Muito Raro (50 Pontos)', ' Seres que vem da antiguidade até o presente, raças esquecidas e excepcionais, que foram criadas pelas Altas-Divindades.', '200', ' Seu corpo é volátil e feito de uma nuvem de mana, os golpes que o acertam fazem com que parte dessa mana se perca. Sua coloração pode variar dentre as cores básicas, vermelho, azul, verde e outras.', ' São um povo nômade que viaja entre planos vendendo especiarias, artefatos e equipamentos, geralmente são encontrados em grupos pequenos formados por no máximo 3 membros. ', ' Vindos do plano etéreo os Vorauchein, nome dado pelos Magos que lhes descobriram, eles viviam em uma comunidade, porém raramente tinham iterações uns com os outros. A descoberta de novos mundos e planos fez com que eles se transformassem em exímios comerciantes e aderissem à vida nômade.', '4', '3', '6', '6', '7', '7', '10', '15', '9');

--
-- Extraindo dados da tabela `raca_has_descendencia`
--

INSERT INTO `raca_has_descendencia` (`IDRACA`, `IDDESCENDENCIA`) VALUES
(1, 1),
(3, 2),
(3, 3),
(3, 4);

--
-- Extraindo dados da tabela `raca_has_especializacao`
--

INSERT INTO `raca_has_especializacao` (`IDRACA`, `IDESPECIALIZACAO`) VALUES
(3, 3),
(3, 4),
(3, 5),
(3, 6);

--
-- Extraindo dados da tabela `raca_has_habilidade`
--

INSERT INTO `raca_has_habilidade` (`IDRACA`, `IDHABILIDADE`) VALUES
(2, 1);

--
-- Extraindo dados da tabela `raca_has_habito`
--

INSERT INTO `raca_has_habito` (`IDRACA`, `IDHABITO`, `QTDRACAHABITO`) VALUES
(3, 2, 5),
(3, 3, 3),
(3, 24, 5);

--
-- Extraindo dados da tabela `raca_has_idioma`
--

INSERT INTO `raca_has_idioma` (`IDRACA`, `IDIDIOMA`) VALUES
(3, 2),
(3, 3);

--
-- Extraindo dados da tabela `raca_has_patrono`
--

INSERT INTO `raca_has_patrono` (`IDRACA`, `IDPATRONO`) VALUES
(3, 2);

--
-- Extraindo dados da tabela `reputacao`
--

INSERT INTO `reputacao` (`IDREPUTACAO`, `NOMEREPUTACAO`) VALUES
(1, 'Muito boa');

--
-- Extraindo dados da tabela `sanidade`
--

INSERT INTO `sanidade` (`IDSANIDADE`, `NOMESANIDADE`, `DESCSANIDADE`) VALUES
(1, 'Servo de Cthulhu', 'Ó GRANDE SENHRO XULHU');

--
-- Extraindo dados da tabela `situacao`
--

INSERT INTO `situacao` (`IDSITUACAO`, `NOMESITUACAO`, `DESCSITUACAO`) VALUES
(1, 'Desempregado', 'Procurando emprego? Acho...');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
