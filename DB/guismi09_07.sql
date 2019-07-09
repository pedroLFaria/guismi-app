-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09-Jul-2019 às 18:40
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `acao`
--

CREATE TABLE `acao` (
  `idAcao` int(1) NOT NULL,
  `nome` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `acao`
--

INSERT INTO `acao` (`idAcao`, `nome`) VALUES
(1, 'Ação Hipotetica');

-- --------------------------------------------------------

--
-- Estrutura da tabela `acao_has_habilidades`
--

CREATE TABLE `acao_has_habilidades` (
  `idAcao` int(1) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `acao_has_habilidades`
--

INSERT INTO `acao_has_habilidades` (`idAcao`, `idHabilidades`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `caminho`
--

CREATE TABLE `caminho` (
  `idCaminho` int(2) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `caminho_desc` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `caminho`
--

INSERT INTO `caminho` (`idCaminho`, `nome`, `caminho_desc`) VALUES
(1, 'Caminho Hipotetico', 'Caminho Hipotetico Descrito');

-- --------------------------------------------------------

--
-- Estrutura da tabela `caminho_has_habilidades`
--

CREATE TABLE `caminho_has_habilidades` (
  `idCaminho` int(2) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `caminho_has_habilidades`
--

INSERT INTO `caminho_has_habilidades` (`idCaminho`, `idHabilidades`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `caminho_has_habitos`
--

CREATE TABLE `caminho_has_habitos` (
  `idCaminho` int(2) NOT NULL,
  `idHabitos` int(4) NOT NULL,
  `quantidade` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `caminho_has_habitos`
--

INSERT INTO `caminho_has_habitos` (`idCaminho`, `idHabitos`, `quantidade`) VALUES
(1, 1, 69);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cidade`
--

CREATE TABLE `cidade` (
  `idCidade` int(4) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_cidade` text NOT NULL,
  `populacao` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cidade`
--

INSERT INTO `cidade` (`idCidade`, `nome`, `desc_cidade`, `populacao`) VALUES
(1, 'Curitiba Hipotetica', 'Hipotetacratenusa', '123 milumanos');

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia`
--

CREATE TABLE `descendencia` (
  `idDescendencia` int(4) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_descend` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `descendencia`
--

INSERT INTO `descendencia` (`idDescendencia`, `nome`, `desc_descend`) VALUES
(1, 'Trapezio Descendente', 'Descrição Descente'),
(2, 'Corpo Arcano', 'Seu corpo é formado de energia magica mutável, podendo alterar sua forma e garantindo resistência magica +2.'),
(3, 'Ampliador de Mana Etherea ', 'Seu corpo é uma grande fonte de mana, o potencial de mana é aumentado para 7 vezes e pode usar sua vida como mana, porém devido a isto não podem conjurar magia de sangue.'),
(4, 'Toque Arcano', 'Por ser de Mana, seu toque pode conceder mana extra para uma criatura, gastando Sangue na quantia doada.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_ficha`
--

CREATE TABLE `descendencia_has_ficha` (
  `idDescendencia` int(4) NOT NULL,
  `idFicha` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `descendencia_has_ficha`
--

INSERT INTO `descendencia_has_ficha` (`idDescendencia`, `idFicha`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_habilidades`
--

CREATE TABLE `descendencia_has_habilidades` (
  `idDescendencia` int(4) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `descendencia_has_habilidades`
--

INSERT INTO `descendencia_has_habilidades` (`idDescendencia`, `idHabilidades`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_habitos`
--

CREATE TABLE `descendencia_has_habitos` (
  `idDescendencia` int(4) NOT NULL,
  `idHabitos` int(4) NOT NULL,
  `quantidade` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `descendencia_has_habitos`
--

INSERT INTO `descendencia_has_habitos` (`idDescendencia`, `idHabitos`, `quantidade`) VALUES
(1, 1, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_sanidade`
--

CREATE TABLE `descendencia_has_sanidade` (
  `idDescendencia` int(4) NOT NULL,
  `idSanidade` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `descendencia_has_sanidade`
--

INSERT INTO `descendencia_has_sanidade` (`idDescendencia`, `idSanidade`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_situacao`
--

CREATE TABLE `descendencia_has_situacao` (
  `idDescendencia` int(4) NOT NULL,
  `idSituacao` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `descendencia_has_situacao`
--

INSERT INTO `descendencia_has_situacao` (`idDescendencia`, `idSituacao`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `especializacao`
--

CREATE TABLE `especializacao` (
  `idEspecializacao` int(5) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_esp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `especializacao`
--

INSERT INTO `especializacao` (`idEspecializacao`, `nome`, `desc_esp`) VALUES
(1, 'Trap', 'Cavalo de Troia'),
(3, 'Runas', 'Conhecimento especializado em runas.'),
(4, 'Negociar', 'Conhecimento especializado em negociação.'),
(5, 'Magia Arcana', 'Conhecimento especializado em magia arcana.'),
(6, 'Rituais', 'Conhecimento especializado em rituais.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `especializacao_has_caminho`
--

CREATE TABLE `especializacao_has_caminho` (
  `idEspecializacao` int(5) NOT NULL,
  `idCaminho` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `especializacao_has_caminho`
--

INSERT INTO `especializacao_has_caminho` (`idEspecializacao`, `idCaminho`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha`
--

CREATE TABLE `ficha` (
  `idFicha` int(10) NOT NULL,
  `idRaca` int(4) NOT NULL,
  `idCidade` int(4) NOT NULL,
  `idJogador` int(10) NOT NULL,
  `nome_pers` varchar(50) NOT NULL,
  `img` varchar(500) DEFAULT NULL,
  `idade` decimal(4,0) NOT NULL,
  `afiliacao` varchar(80) DEFAULT NULL,
  `cla` varchar(80) DEFAULT NULL,
  `sorte_dia` decimal(3,0) DEFAULT NULL,
  `dist_for` decimal(3,0) DEFAULT NULL,
  `dist_con` decimal(3,0) DEFAULT NULL,
  `dist_agi` decimal(3,0) DEFAULT NULL,
  `dist_des` decimal(3,0) DEFAULT NULL,
  `dist_int` decimal(3,0) DEFAULT NULL,
  `dist_sab` decimal(3,0) DEFAULT NULL,
  `dist_car` decimal(3,0) DEFAULT NULL,
  `nivel_pers` int(3) NOT NULL,
  `exp_pers` int(8) NOT NULL,
  `pers_desc` text,
  `pers_hist` text,
  `nota` text,
  `idSanidade` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ficha`
--

INSERT INTO `ficha` (`idFicha`, `idRaca`, `idCidade`, `idJogador`, `nome_pers`, `img`, `idade`, `afiliacao`, `cla`, `sorte_dia`, `dist_for`, `dist_con`, `dist_agi`, `dist_des`, `dist_int`, `dist_sab`, `dist_car`, `nivel_pers`, `exp_pers`, `pers_desc`, `pers_hist`, `nota`, `idSanidade`) VALUES
(1, 2, 1, 1, 'Personagem Hipotetico 1', 'https://pbs.twimg.com/profile_images/1068864058768658433/2yYNwEgb_400x400.jpg', '123', 'Nao tem', 'Nao tem2', '4', '1', '2', '3', '4', '5', '6', '7', 0, 0, 'Grandes olhos pequenos', 'Nasceu um dia', '100', NULL),
(2, 1, 1, 1, 'Personagem Hipotetico 2', 'https://pbs.twimg.com/media/DrxYNoxX0AMETWp.jpg:large', '321', 'Nao ', 'Nao 2', '1', '4', '6', '7', '9', '0', '1', '8', 0, 0, 'Grandes olhos pequenos', 'Nasceu um dia', '100', NULL),
(3, 1, 1, 1, 'Personagem Hipotetico 3 de nome grande pracarai', 'https://pbs.twimg.com/media/Ds4QeCtWoAEMNah.jpg:large', '321', 'Nao ', 'Nao 2', '1', '4', '6', '7', '9', '0', '1', '8', 0, 0, 'Grandes olhos pequenos', 'Nasceu um dia', '100', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_caminho`
--

CREATE TABLE `ficha_has_caminho` (
  `idFicha` int(10) NOT NULL,
  `idCaminho` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ficha_has_caminho`
--

INSERT INTO `ficha_has_caminho` (`idFicha`, `idCaminho`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_habitos`
--

CREATE TABLE `ficha_has_habitos` (
  `idFicha` int(10) NOT NULL,
  `idHabitos` int(4) NOT NULL,
  `qtd` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ficha_has_habitos`
--

INSERT INTO `ficha_has_habitos` (`idFicha`, `idHabitos`, `qtd`) VALUES
(1, 1, 50);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_idioma`
--

CREATE TABLE `ficha_has_idioma` (
  `idFicha` int(10) NOT NULL,
  `idIdiomas` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ficha_has_idioma`
--

INSERT INTO `ficha_has_idioma` (`idFicha`, `idIdiomas`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_inventario`
--

CREATE TABLE `ficha_has_inventario` (
  `idFicha` int(10) NOT NULL,
  `idInventario` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ficha_has_inventario`
--

INSERT INTO `ficha_has_inventario` (`idFicha`, `idInventario`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_patrono`
--

CREATE TABLE `ficha_has_patrono` (
  `idFicha` int(10) NOT NULL,
  `idPatrono` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_situacao`
--

CREATE TABLE `ficha_has_situacao` (
  `idFicha` int(10) NOT NULL,
  `idSituacao` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ficha_has_situacao`
--

INSERT INTO `ficha_has_situacao` (`idFicha`, `idSituacao`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `habilidades`
--

CREATE TABLE `habilidades` (
  `idHabilidades` int(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `atributo_ataca` varchar(3) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `gasto1` varchar(50) NOT NULL,
  `gasto2` varchar(50) DEFAULT NULL,
  `gasto3` varchar(50) DEFAULT NULL,
  `utilizacao` varchar(80) NOT NULL,
  `desc_hab` text NOT NULL,
  `pre_req` varchar(255) DEFAULT NULL,
  `nivel_req` decimal(3,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `habilidades`
--

INSERT INTO `habilidades` (`idHabilidades`, `nome`, `atributo_ataca`, `tipo`, `gasto1`, `gasto2`, `gasto3`, `utilizacao`, `desc_hab`, `pre_req`, `nivel_req`) VALUES
(1, 'Shoriu quem?', 'for', 'Passiva', 'Vida 57', NULL, NULL, '1 vez por ano', 'chuta pra baixo', 'pergaminho', '52');

-- --------------------------------------------------------

--
-- Estrutura da tabela `habilidades_has_ficha`
--

CREATE TABLE `habilidades_has_ficha` (
  `idHabilidades` int(10) NOT NULL,
  `idFicha` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `habilidades_has_ficha`
--

INSERT INTO `habilidades_has_ficha` (`idHabilidades`, `idFicha`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `habitos`
--

CREATE TABLE `habitos` (
  `idHabitos` int(4) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `desc_hab` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `habitos`
--

INSERT INTO `habitos` (`idHabitos`, `nome`, `desc_hab`) VALUES
(1, 'Hentai', 'Muito sesgso'),
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
(27, 'Explorar', 'Conhecimento em exploração.'),
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `habitos_has_especializacao`
--

CREATE TABLE `habitos_has_especializacao` (
  `idHabitos` int(4) NOT NULL,
  `idEspecializacao` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `habitos_has_especializacao`
--

INSERT INTO `habitos_has_especializacao` (`idHabitos`, `idEspecializacao`) VALUES
(1, 1),
(2, 3),
(2, 6),
(3, 5),
(24, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `idiomas`
--

CREATE TABLE `idiomas` (
  `idIdiomas` int(3) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_idioma` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `idiomas`
--

INSERT INTO `idiomas` (`idIdiomas`, `nome`, `desc_idioma`) VALUES
(1, 'Fala Mansa', 'Aquele que fala mansinho'),
(2, 'Comum', 'Língua falada por toda parte do mundo, quase todas as raças falam.'),
(3, 'Niergaus', 'Língua falada por Ethereos, sua escrita é feita com mana e por meio de hieroglifos quadrados.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `inventario`
--

CREATE TABLE `inventario` (
  `idInventario` int(10) NOT NULL,
  `nome` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `inventario`
--

INSERT INTO `inventario` (`idInventario`, `nome`) VALUES
(1, 'Bolsão');

-- --------------------------------------------------------

--
-- Estrutura da tabela `inventario_has_item`
--

CREATE TABLE `inventario_has_item` (
  `idInventario` int(10) NOT NULL,
  `idItem` int(10) NOT NULL,
  `quantidade` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `inventario_has_item`
--

INSERT INTO `inventario_has_item` (`idInventario`, `idItem`, `quantidade`) VALUES
(1, 1, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `item`
--

CREATE TABLE `item` (
  `idItem` int(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_item` text NOT NULL,
  `peso` decimal(5,2) NOT NULL,
  `valor_magico` decimal(10,0) NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `moeda` tinyint(1) NOT NULL,
  `iconeitem` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `item`
--

INSERT INTO `item` (`idItem`, `nome`, `desc_item`, `peso`, `valor_magico`, `valor`, `moeda`, `iconeitem`) VALUES
(1, 'Pedra', 'PEsada pra caralho', '999.99', '0', '12', 0, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador`
--

CREATE TABLE `jogador` (
  `idJogador` int(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `login` varchar(15) NOT NULL,
  `senha` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mestre` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `jogador`
--

INSERT INTO `jogador` (`idJogador`, `nome`, `login`, `senha`, `mestre`) VALUES
(1, 'Jogador Hipotetico', 'hipojogador', 'hipopocratenusa', 0),
(7, 'testando', '', 'testando', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `patrono`
--

CREATE TABLE `patrono` (
  `idPatrono` int(3) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_pat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `patrono`
--

INSERT INTO `patrono` (`idPatrono`, `nome`, `desc_pat`) VALUES
(2, 'Azuth', 'https://forgottenrealms.fandom.com/wiki/Azuth');

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca`
--

CREATE TABLE `raca` (
  `idRaca` int(4) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `raridade` varchar(30) NOT NULL,
  `desc_raca` text NOT NULL,
  `longevidade` varchar(50) NOT NULL,
  `tracos_fisio` text,
  `cultura` text,
  `historia` text,
  `raca_for` decimal(3,0) DEFAULT NULL,
  `raca_con` decimal(3,0) DEFAULT NULL,
  `raca_agi` decimal(3,0) DEFAULT NULL,
  `raca_des` decimal(3,0) DEFAULT NULL,
  `raca_int` decimal(3,0) DEFAULT NULL,
  `raca_sab` decimal(3,0) DEFAULT NULL,
  `raca_car` decimal(3,0) DEFAULT NULL,
  `sangue` decimal(4,0) DEFAULT NULL,
  `vigor` decimal(4,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `raca`
--

INSERT INTO `raca` (`idRaca`, `nome`, `raridade`, `desc_raca`, `longevidade`, `tracos_fisio`, `cultura`, `historia`, `raca_for`, `raca_con`, `raca_agi`, `raca_des`, `raca_int`, `raca_sab`, `raca_car`, `sangue`, `vigor`) VALUES
(1, 'Raça Hipotetica1', 'Normal 1', 'Hipoteraça', '500', 'Olhos graaandes', 'Fazem dança da chuva', 'Morreu um monte de gente numa guerra', '1', '2', '3', '4', '5', '6', '7', '10', '11'),
(2, 'Raça Hipotetica2', 'Normal 2', 'Hipoteraça 2', '123123', 'Barriguinha', 'Guerras', 'Ninguem morreu', '9', '8', '7', '6', '5', '4', '3', '12', '13'),
(3, 'Ethereos (Niergaus)', 'Muito Raro (50 Pontos)', ' Seres que vem da antiguidade até o presente, raças esquecidas e excepcionais, que foram criadas pelas Altas-Divindades.', '200', ' Seu corpo é volátil e feito de uma nuvem de mana, os golpes que o acertam fazem com que parte dessa mana se perca. Sua coloração pode variar dentre as cores básicas, vermelho, azul, verde e outras.', ' São um povo nômade que viaja entre planos vendendo especiarias, artefatos e equipamentos, geralmente são encontrados em grupos pequenos formados por no máximo 3 membros. ', ' Vindos do plano etéreo os Vorauchein, nome dado pelos Magos que lhes descobriram, eles viviam em uma comunidade, porém raramente tinham iterações uns com os outros. A descoberta de novos mundos e planos fez com que eles se transformassem em exímios comerciantes e aderissem à vida nômade.', '4', '3', '6', '6', '7', '7', '10', '15', '9');

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_descendencia`
--

CREATE TABLE `raca_has_descendencia` (
  `idRaca` int(4) NOT NULL,
  `idDescendencia` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `raca_has_descendencia`
--

INSERT INTO `raca_has_descendencia` (`idRaca`, `idDescendencia`) VALUES
(1, 1),
(3, 2),
(3, 3),
(3, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_especializacao`
--

CREATE TABLE `raca_has_especializacao` (
  `idRaca` int(4) NOT NULL,
  `idEspecializacao` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `raca_has_especializacao`
--

INSERT INTO `raca_has_especializacao` (`idRaca`, `idEspecializacao`) VALUES
(3, 3),
(3, 4),
(3, 5),
(3, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_habilidades`
--

CREATE TABLE `raca_has_habilidades` (
  `idRaca` int(4) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_habitos`
--

CREATE TABLE `raca_has_habitos` (
  `idRaca` int(4) NOT NULL,
  `idHabitos` int(4) NOT NULL,
  `quantidade` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `raca_has_habitos`
--

INSERT INTO `raca_has_habitos` (`idRaca`, `idHabitos`, `quantidade`) VALUES
(3, 2, 5),
(3, 3, 3),
(3, 24, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_idiomas`
--

CREATE TABLE `raca_has_idiomas` (
  `idRaca` int(4) NOT NULL,
  `idIdiomas` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `raca_has_idiomas`
--

INSERT INTO `raca_has_idiomas` (`idRaca`, `idIdiomas`) VALUES
(3, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_patrono`
--

CREATE TABLE `raca_has_patrono` (
  `idRaca` int(4) NOT NULL,
  `idPatrono` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `raca_has_patrono`
--

INSERT INTO `raca_has_patrono` (`idRaca`, `idPatrono`) VALUES
(3, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reputacao`
--

CREATE TABLE `reputacao` (
  `idReputacao` int(1) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `efeito` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `reputacao`
--

INSERT INTO `reputacao` (`idReputacao`, `nome`, `efeito`) VALUES
(1, 'Muito boa', 'Ganha amor de todo mundo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sanidade`
--

CREATE TABLE `sanidade` (
  `idSanidade` int(1) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_san` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sanidade`
--

INSERT INTO `sanidade` (`idSanidade`, `nome`, `desc_san`) VALUES
(1, 'Servo de Cthulhu', 'Ó GRANDE SENHRO XULHU');

-- --------------------------------------------------------

--
-- Estrutura da tabela `situacao`
--

CREATE TABLE `situacao` (
  `idSituacao` int(2) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_sit` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `situacao`
--

INSERT INTO `situacao` (`idSituacao`, `nome`, `desc_sit`) VALUES
(1, 'Desempregado', 'Procurando emprego? Acho...');

-- --------------------------------------------------------

--
-- Estrutura da tabela `situacao_has_habilidades`
--

CREATE TABLE `situacao_has_habilidades` (
  `idSituacao` int(2) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `situacao_has_habilidades`
--

INSERT INTO `situacao_has_habilidades` (`idSituacao`, `idHabilidades`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tracos_raciais`
--

CREATE TABLE `tracos_raciais` (
  `idTracos_Raciais` int(4) NOT NULL,
  `idRaca` int(4) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `nivel` decimal(3,0) NOT NULL,
  `desc_traco` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tracos_raciais`
--

INSERT INTO `tracos_raciais` (`idTracos_Raciais`, `idRaca`, `nome`, `nivel`, `desc_traco`) VALUES
(1, 2, 'Tem barba comprida', '2', 'Ganha uma grande barba quando chega no nível 2'),
(3, 3, 'Agilidade Temporal', '15', ' “	Seu corpo se desfaz levando todas as roupas e equipamentos junto, após um tempo, como se fosse magia ele aparece noutro local...	”\r\n	Graças ao seu corpo feito de mana ele pode se teletransportar para outro local que esteja até 18 metros de distância.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acao`
--
ALTER TABLE `acao`
  ADD PRIMARY KEY (`idAcao`);

--
-- Indexes for table `acao_has_habilidades`
--
ALTER TABLE `acao_has_habilidades`
  ADD PRIMARY KEY (`idAcao`,`idHabilidades`),
  ADD KEY `fk_Hab2` (`idHabilidades`);

--
-- Indexes for table `caminho`
--
ALTER TABLE `caminho`
  ADD PRIMARY KEY (`idCaminho`);

--
-- Indexes for table `caminho_has_habilidades`
--
ALTER TABLE `caminho_has_habilidades`
  ADD PRIMARY KEY (`idCaminho`,`idHabilidades`),
  ADD KEY `fk_Habi3` (`idHabilidades`);

--
-- Indexes for table `caminho_has_habitos`
--
ALTER TABLE `caminho_has_habitos`
  ADD PRIMARY KEY (`idCaminho`,`idHabitos`),
  ADD KEY `fk_Hab8` (`idHabitos`);

--
-- Indexes for table `cidade`
--
ALTER TABLE `cidade`
  ADD PRIMARY KEY (`idCidade`);

--
-- Indexes for table `descendencia`
--
ALTER TABLE `descendencia`
  ADD PRIMARY KEY (`idDescendencia`);

--
-- Indexes for table `descendencia_has_ficha`
--
ALTER TABLE `descendencia_has_ficha`
  ADD PRIMARY KEY (`idDescendencia`,`idFicha`),
  ADD KEY `fk_Fic4` (`idFicha`);

--
-- Indexes for table `descendencia_has_habilidades`
--
ALTER TABLE `descendencia_has_habilidades`
  ADD PRIMARY KEY (`idDescendencia`,`idHabilidades`),
  ADD KEY `fk_Habi4` (`idHabilidades`);

--
-- Indexes for table `descendencia_has_habitos`
--
ALTER TABLE `descendencia_has_habitos`
  ADD PRIMARY KEY (`idDescendencia`,`idHabitos`),
  ADD KEY `fk_Hab5` (`idHabitos`);

--
-- Indexes for table `descendencia_has_sanidade`
--
ALTER TABLE `descendencia_has_sanidade`
  ADD PRIMARY KEY (`idDescendencia`,`idSanidade`),
  ADD KEY `fk_San2` (`idSanidade`);

--
-- Indexes for table `descendencia_has_situacao`
--
ALTER TABLE `descendencia_has_situacao`
  ADD PRIMARY KEY (`idDescendencia`,`idSituacao`),
  ADD KEY `fk_Sit2` (`idSituacao`);

--
-- Indexes for table `especializacao`
--
ALTER TABLE `especializacao`
  ADD PRIMARY KEY (`idEspecializacao`);

--
-- Indexes for table `especializacao_has_caminho`
--
ALTER TABLE `especializacao_has_caminho`
  ADD PRIMARY KEY (`idEspecializacao`,`idCaminho`),
  ADD KEY `fk_Cam5` (`idCaminho`);

--
-- Indexes for table `ficha`
--
ALTER TABLE `ficha`
  ADD PRIMARY KEY (`idFicha`),
  ADD KEY `fk_raca` (`idRaca`),
  ADD KEY `fk_cidade` (`idCidade`),
  ADD KEY `fk_Jogador` (`idJogador`),
  ADD KEY `idSanidade` (`idSanidade`);

--
-- Indexes for table `ficha_has_caminho`
--
ALTER TABLE `ficha_has_caminho`
  ADD PRIMARY KEY (`idFicha`,`idCaminho`),
  ADD KEY `idCaminho` (`idCaminho`);

--
-- Indexes for table `ficha_has_habitos`
--
ALTER TABLE `ficha_has_habitos`
  ADD PRIMARY KEY (`idFicha`,`idHabitos`),
  ADD KEY `idHabitos` (`idHabitos`);

--
-- Indexes for table `ficha_has_idioma`
--
ALTER TABLE `ficha_has_idioma`
  ADD PRIMARY KEY (`idFicha`,`idIdiomas`),
  ADD KEY `idIdiomas` (`idIdiomas`);

--
-- Indexes for table `ficha_has_inventario`
--
ALTER TABLE `ficha_has_inventario`
  ADD PRIMARY KEY (`idFicha`,`idInventario`),
  ADD KEY `fk_Inv2` (`idInventario`);

--
-- Indexes for table `ficha_has_patrono`
--
ALTER TABLE `ficha_has_patrono`
  ADD PRIMARY KEY (`idFicha`,`idPatrono`),
  ADD KEY `idPatrono` (`idPatrono`);

--
-- Indexes for table `ficha_has_situacao`
--
ALTER TABLE `ficha_has_situacao`
  ADD PRIMARY KEY (`idFicha`,`idSituacao`),
  ADD KEY `fk_Sit` (`idSituacao`);

--
-- Indexes for table `habilidades`
--
ALTER TABLE `habilidades`
  ADD PRIMARY KEY (`idHabilidades`);

--
-- Indexes for table `habilidades_has_ficha`
--
ALTER TABLE `habilidades_has_ficha`
  ADD PRIMARY KEY (`idHabilidades`,`idFicha`),
  ADD KEY `fk_Fic` (`idFicha`);

--
-- Indexes for table `habitos`
--
ALTER TABLE `habitos`
  ADD PRIMARY KEY (`idHabitos`);

--
-- Indexes for table `habitos_has_especializacao`
--
ALTER TABLE `habitos_has_especializacao`
  ADD PRIMARY KEY (`idHabitos`,`idEspecializacao`),
  ADD KEY `fk_Esp` (`idEspecializacao`);

--
-- Indexes for table `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`idIdiomas`);

--
-- Indexes for table `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`idInventario`);

--
-- Indexes for table `inventario_has_item`
--
ALTER TABLE `inventario_has_item`
  ADD PRIMARY KEY (`idInventario`,`idItem`),
  ADD KEY `fk_Ite` (`idItem`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`idItem`);

--
-- Indexes for table `jogador`
--
ALTER TABLE `jogador`
  ADD PRIMARY KEY (`idJogador`);

--
-- Indexes for table `patrono`
--
ALTER TABLE `patrono`
  ADD PRIMARY KEY (`idPatrono`);

--
-- Indexes for table `raca`
--
ALTER TABLE `raca`
  ADD PRIMARY KEY (`idRaca`);

--
-- Indexes for table `raca_has_descendencia`
--
ALTER TABLE `raca_has_descendencia`
  ADD PRIMARY KEY (`idRaca`,`idDescendencia`),
  ADD KEY `fk_Des` (`idDescendencia`);

--
-- Indexes for table `raca_has_especializacao`
--
ALTER TABLE `raca_has_especializacao`
  ADD PRIMARY KEY (`idRaca`,`idEspecializacao`),
  ADD KEY `fk_Esp2` (`idEspecializacao`);

--
-- Indexes for table `raca_has_habilidades`
--
ALTER TABLE `raca_has_habilidades`
  ADD PRIMARY KEY (`idRaca`,`idHabilidades`),
  ADD KEY `fk_Habit` (`idHabilidades`);

--
-- Indexes for table `raca_has_habitos`
--
ALTER TABLE `raca_has_habitos`
  ADD PRIMARY KEY (`idRaca`,`idHabitos`),
  ADD KEY `fk_Hab3` (`idHabitos`);

--
-- Indexes for table `raca_has_idiomas`
--
ALTER TABLE `raca_has_idiomas`
  ADD PRIMARY KEY (`idRaca`,`idIdiomas`),
  ADD KEY `fk_Idi2` (`idIdiomas`);

--
-- Indexes for table `raca_has_patrono`
--
ALTER TABLE `raca_has_patrono`
  ADD PRIMARY KEY (`idRaca`,`idPatrono`),
  ADD KEY `fk_Pat` (`idPatrono`);

--
-- Indexes for table `reputacao`
--
ALTER TABLE `reputacao`
  ADD PRIMARY KEY (`idReputacao`);

--
-- Indexes for table `sanidade`
--
ALTER TABLE `sanidade`
  ADD PRIMARY KEY (`idSanidade`);

--
-- Indexes for table `situacao`
--
ALTER TABLE `situacao`
  ADD PRIMARY KEY (`idSituacao`);

--
-- Indexes for table `situacao_has_habilidades`
--
ALTER TABLE `situacao_has_habilidades`
  ADD PRIMARY KEY (`idSituacao`,`idHabilidades`),
  ADD KEY `fk_Habi5` (`idHabilidades`);

--
-- Indexes for table `tracos_raciais`
--
ALTER TABLE `tracos_raciais`
  ADD PRIMARY KEY (`idTracos_Raciais`),
  ADD KEY `fk_raca2` (`idRaca`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acao`
--
ALTER TABLE `acao`
  MODIFY `idAcao` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `caminho`
--
ALTER TABLE `caminho`
  MODIFY `idCaminho` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cidade`
--
ALTER TABLE `cidade`
  MODIFY `idCidade` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `descendencia`
--
ALTER TABLE `descendencia`
  MODIFY `idDescendencia` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `especializacao`
--
ALTER TABLE `especializacao`
  MODIFY `idEspecializacao` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ficha`
--
ALTER TABLE `ficha`
  MODIFY `idFicha` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `habilidades`
--
ALTER TABLE `habilidades`
  MODIFY `idHabilidades` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `habitos`
--
ALTER TABLE `habitos`
  MODIFY `idHabitos` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `idIdiomas` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inventario`
--
ALTER TABLE `inventario`
  MODIFY `idInventario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `idItem` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jogador`
--
ALTER TABLE `jogador`
  MODIFY `idJogador` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `patrono`
--
ALTER TABLE `patrono`
  MODIFY `idPatrono` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `raca`
--
ALTER TABLE `raca`
  MODIFY `idRaca` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `reputacao`
--
ALTER TABLE `reputacao`
  MODIFY `idReputacao` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sanidade`
--
ALTER TABLE `sanidade`
  MODIFY `idSanidade` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `situacao`
--
ALTER TABLE `situacao`
  MODIFY `idSituacao` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tracos_raciais`
--
ALTER TABLE `tracos_raciais`
  MODIFY `idTracos_Raciais` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `acao_has_habilidades`
--
ALTER TABLE `acao_has_habilidades`
  ADD CONSTRAINT `acao_has_habilidades_ibfk_1` FOREIGN KEY (`idAcao`) REFERENCES `acao` (`idAcao`),
  ADD CONSTRAINT `fk_Aca2` FOREIGN KEY (`idAcao`) REFERENCES `acao` (`idAcao`),
  ADD CONSTRAINT `fk_Hab2` FOREIGN KEY (`idHabilidades`) REFERENCES `habilidades` (`idHabilidades`);

--
-- Limitadores para a tabela `caminho_has_habilidades`
--
ALTER TABLE `caminho_has_habilidades`
  ADD CONSTRAINT `fk_Cam3` FOREIGN KEY (`idCaminho`) REFERENCES `caminho` (`idCaminho`),
  ADD CONSTRAINT `fk_Habi3` FOREIGN KEY (`idHabilidades`) REFERENCES `habilidades` (`idHabilidades`);

--
-- Limitadores para a tabela `caminho_has_habitos`
--
ALTER TABLE `caminho_has_habitos`
  ADD CONSTRAINT `fk_Cam4` FOREIGN KEY (`idCaminho`) REFERENCES `caminho` (`idCaminho`),
  ADD CONSTRAINT `fk_Hab8` FOREIGN KEY (`idHabitos`) REFERENCES `habitos` (`idHabitos`);

--
-- Limitadores para a tabela `descendencia_has_ficha`
--
ALTER TABLE `descendencia_has_ficha`
  ADD CONSTRAINT `fk_Des5` FOREIGN KEY (`idDescendencia`) REFERENCES `descendencia` (`idDescendencia`),
  ADD CONSTRAINT `fk_Fic4` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`);

--
-- Limitadores para a tabela `descendencia_has_habilidades`
--
ALTER TABLE `descendencia_has_habilidades`
  ADD CONSTRAINT `fk_Des3` FOREIGN KEY (`idDescendencia`) REFERENCES `descendencia` (`idDescendencia`),
  ADD CONSTRAINT `fk_Habi4` FOREIGN KEY (`idHabilidades`) REFERENCES `habilidades` (`idHabilidades`);

--
-- Limitadores para a tabela `descendencia_has_habitos`
--
ALTER TABLE `descendencia_has_habitos`
  ADD CONSTRAINT `fk_Des7` FOREIGN KEY (`idDescendencia`) REFERENCES `descendencia` (`idDescendencia`),
  ADD CONSTRAINT `fk_Hab5` FOREIGN KEY (`idHabitos`) REFERENCES `habitos` (`idHabitos`);

--
-- Limitadores para a tabela `descendencia_has_sanidade`
--
ALTER TABLE `descendencia_has_sanidade`
  ADD CONSTRAINT `fk_Des6` FOREIGN KEY (`idDescendencia`) REFERENCES `descendencia` (`idDescendencia`),
  ADD CONSTRAINT `fk_San2` FOREIGN KEY (`idSanidade`) REFERENCES `sanidade` (`idSanidade`);

--
-- Limitadores para a tabela `descendencia_has_situacao`
--
ALTER TABLE `descendencia_has_situacao`
  ADD CONSTRAINT `fk_Des2` FOREIGN KEY (`idDescendencia`) REFERENCES `descendencia` (`idDescendencia`),
  ADD CONSTRAINT `fk_Sit2` FOREIGN KEY (`idSituacao`) REFERENCES `situacao` (`idSituacao`);

--
-- Limitadores para a tabela `especializacao_has_caminho`
--
ALTER TABLE `especializacao_has_caminho`
  ADD CONSTRAINT `fk_Cam5` FOREIGN KEY (`idCaminho`) REFERENCES `caminho` (`idCaminho`),
  ADD CONSTRAINT `fk_Esp4` FOREIGN KEY (`idEspecializacao`) REFERENCES `especializacao` (`idEspecializacao`);

--
-- Limitadores para a tabela `ficha`
--
ALTER TABLE `ficha`
  ADD CONSTRAINT `ficha_ibfk_1` FOREIGN KEY (`idSanidade`) REFERENCES `sanidade` (`idSanidade`),
  ADD CONSTRAINT `fk_Jogador` FOREIGN KEY (`idJogador`) REFERENCES `jogador` (`idJogador`),
  ADD CONSTRAINT `fk_cidade` FOREIGN KEY (`idCidade`) REFERENCES `cidade` (`idCidade`),
  ADD CONSTRAINT `fk_raca` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `ficha_has_caminho`
--
ALTER TABLE `ficha_has_caminho`
  ADD CONSTRAINT `ficha_has_caminho_ibfk_1` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `ficha_has_caminho_ibfk_2` FOREIGN KEY (`idCaminho`) REFERENCES `caminho` (`idCaminho`);

--
-- Limitadores para a tabela `ficha_has_habitos`
--
ALTER TABLE `ficha_has_habitos`
  ADD CONSTRAINT `ficha_has_habitos_ibfk_1` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `ficha_has_habitos_ibfk_2` FOREIGN KEY (`idHabitos`) REFERENCES `habitos` (`idHabitos`);

--
-- Limitadores para a tabela `ficha_has_idioma`
--
ALTER TABLE `ficha_has_idioma`
  ADD CONSTRAINT `ficha_has_idioma_ibfk_1` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `ficha_has_idioma_ibfk_2` FOREIGN KEY (`idIdiomas`) REFERENCES `idiomas` (`idIdiomas`);

--
-- Limitadores para a tabela `ficha_has_inventario`
--
ALTER TABLE `ficha_has_inventario`
  ADD CONSTRAINT `fk_Fic2` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `fk_Inv2` FOREIGN KEY (`idInventario`) REFERENCES `inventario` (`idInventario`);

--
-- Limitadores para a tabela `ficha_has_patrono`
--
ALTER TABLE `ficha_has_patrono`
  ADD CONSTRAINT `ficha_has_patrono_ibfk_1` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `ficha_has_patrono_ibfk_2` FOREIGN KEY (`idPatrono`) REFERENCES `patrono` (`idPatrono`);

--
-- Limitadores para a tabela `ficha_has_situacao`
--
ALTER TABLE `ficha_has_situacao`
  ADD CONSTRAINT `fk_Fic3` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `fk_Sit` FOREIGN KEY (`idSituacao`) REFERENCES `situacao` (`idSituacao`);

--
-- Limitadores para a tabela `habilidades_has_ficha`
--
ALTER TABLE `habilidades_has_ficha`
  ADD CONSTRAINT `fk_Fic` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `fk_Habi2` FOREIGN KEY (`idHabilidades`) REFERENCES `habilidades` (`idHabilidades`);

--
-- Limitadores para a tabela `habitos_has_especializacao`
--
ALTER TABLE `habitos_has_especializacao`
  ADD CONSTRAINT `fk_Esp` FOREIGN KEY (`idEspecializacao`) REFERENCES `especializacao` (`idEspecializacao`),
  ADD CONSTRAINT `fk_Hab` FOREIGN KEY (`idHabitos`) REFERENCES `habitos` (`idHabitos`);

--
-- Limitadores para a tabela `inventario_has_item`
--
ALTER TABLE `inventario_has_item`
  ADD CONSTRAINT `fk_Inv` FOREIGN KEY (`idInventario`) REFERENCES `inventario` (`idInventario`),
  ADD CONSTRAINT `inventario_has_item_ibfk_1` FOREIGN KEY (`idItem`) REFERENCES `item` (`idItem`);

--
-- Limitadores para a tabela `raca_has_descendencia`
--
ALTER TABLE `raca_has_descendencia`
  ADD CONSTRAINT `fk_Des` FOREIGN KEY (`idDescendencia`) REFERENCES `descendencia` (`idDescendencia`),
  ADD CONSTRAINT `fk_Rac6` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `raca_has_especializacao`
--
ALTER TABLE `raca_has_especializacao`
  ADD CONSTRAINT `fk_Esp2` FOREIGN KEY (`idEspecializacao`) REFERENCES `especializacao` (`idEspecializacao`),
  ADD CONSTRAINT `fk_Rac2` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `raca_has_habilidades`
--
ALTER TABLE `raca_has_habilidades`
  ADD CONSTRAINT `fk_Habit` FOREIGN KEY (`idHabilidades`) REFERENCES `habilidades` (`idHabilidades`),
  ADD CONSTRAINT `fk_Rac7` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `raca_has_habitos`
--
ALTER TABLE `raca_has_habitos`
  ADD CONSTRAINT `fk_Hab3` FOREIGN KEY (`idHabitos`) REFERENCES `habitos` (`idHabitos`),
  ADD CONSTRAINT `fk_Rac4` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `raca_has_idiomas`
--
ALTER TABLE `raca_has_idiomas`
  ADD CONSTRAINT `fk_Idi2` FOREIGN KEY (`idIdiomas`) REFERENCES `idiomas` (`idIdiomas`),
  ADD CONSTRAINT `fk_Rac3` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `raca_has_patrono`
--
ALTER TABLE `raca_has_patrono`
  ADD CONSTRAINT `fk_Pat` FOREIGN KEY (`idPatrono`) REFERENCES `patrono` (`idPatrono`),
  ADD CONSTRAINT `fk_Rac5` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `situacao_has_habilidades`
--
ALTER TABLE `situacao_has_habilidades`
  ADD CONSTRAINT `fk_Habi5` FOREIGN KEY (`idHabilidades`) REFERENCES `habilidades` (`idHabilidades`),
  ADD CONSTRAINT `fk_Sit3` FOREIGN KEY (`idSituacao`) REFERENCES `situacao` (`idSituacao`);

--
-- Limitadores para a tabela `tracos_raciais`
--
ALTER TABLE `tracos_raciais`
  ADD CONSTRAINT `fk_raca2` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
