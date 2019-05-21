-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 21-Maio-2019 às 22:20
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.3

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `acao_has_habilidades`
--

CREATE TABLE `acao_has_habilidades` (
  `idAcao` int(1) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `caminho`
--

CREATE TABLE `caminho` (
  `idCaminho` int(2) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `caminho_desc` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `caminho_has_habilidades`
--

CREATE TABLE `caminho_has_habilidades` (
  `idCaminho` int(2) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `caminho_has_habitos`
--

CREATE TABLE `caminho_has_habitos` (
  `idCaminho` int(2) NOT NULL,
  `idHabitos` int(4) NOT NULL,
  `quantidade` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia`
--

CREATE TABLE `descendencia` (
  `idDescendencia` int(4) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_descend` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_ficha`
--

CREATE TABLE `descendencia_has_ficha` (
  `idDescendencia` int(4) NOT NULL,
  `idFicha` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_habilidades`
--

CREATE TABLE `descendencia_has_habilidades` (
  `idDescendencia` int(4) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_habitos`
--

CREATE TABLE `descendencia_has_habitos` (
  `idDescendencia` int(4) NOT NULL,
  `idHabitos` int(4) NOT NULL,
  `quantidade` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_sanidade`
--

CREATE TABLE `descendencia_has_sanidade` (
  `idDescendencia` int(4) NOT NULL,
  `idSanidade` int(1) NOT NULL,
  `quantidade` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `descendencia_has_situacao`
--

CREATE TABLE `descendencia_has_situacao` (
  `idDescendencia` int(4) NOT NULL,
  `idSituacao` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `especializacao`
--

CREATE TABLE `especializacao` (
  `idEspecializacao` int(5) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_esp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `especializacao_has_caminho`
--

CREATE TABLE `especializacao_has_caminho` (
  `idEspecializacao` int(5) NOT NULL,
  `idCaminho` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `pers_desc` text,
  `pers_hist` text,
  `nota` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_inventario`
--

CREATE TABLE `ficha_has_inventario` (
  `idFicha` int(10) NOT NULL,
  `idInventario` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_has_situacao`
--

CREATE TABLE `ficha_has_situacao` (
  `idFicha` int(10) NOT NULL,
  `idSituacao` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `habilidades_has_ficha`
--

CREATE TABLE `habilidades_has_ficha` (
  `idHabilidades` int(10) NOT NULL,
  `idFicha` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `habitos`
--

CREATE TABLE `habitos` (
  `idHabitos` int(4) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `desc_hab` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `habitos_has_especializacao`
--

CREATE TABLE `habitos_has_especializacao` (
  `idHabitos` int(4) NOT NULL,
  `idEspecializacao` int(5) NOT NULL,
  `quantidade` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `idiomas`
--

CREATE TABLE `idiomas` (
  `idIdiomas` int(3) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_idioma` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `inventario`
--

CREATE TABLE `inventario` (
  `idInventario` int(10) NOT NULL,
  `nome` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `inventario_has_item`
--

CREATE TABLE `inventario_has_item` (
  `idInventario` int(10) NOT NULL,
  `idItem` int(10) NOT NULL,
  `quantidade` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `moeda` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador`
--

CREATE TABLE `jogador` (
  `idJogador` int(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `login` varchar(15) NOT NULL,
  `senha` varchar(15) NOT NULL,
  `mestre` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `patrono`
--

CREATE TABLE `patrono` (
  `idPatrono` int(3) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_pat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_descendencia`
--

CREATE TABLE `raca_has_descendencia` (
  `idRaca` int(4) NOT NULL,
  `idDescendencia` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_especializacao`
--

CREATE TABLE `raca_has_especializacao` (
  `idRaca` int(4) NOT NULL,
  `idEspecializacao` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_idiomas`
--

CREATE TABLE `raca_has_idiomas` (
  `idRaca` int(4) NOT NULL,
  `idIdiomas` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca_has_patrono`
--

CREATE TABLE `raca_has_patrono` (
  `idRaca` int(4) NOT NULL,
  `idPatrono` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `reputacao`
--

CREATE TABLE `reputacao` (
  `idReputacao` int(1) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `efeito` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sanidade`
--

CREATE TABLE `sanidade` (
  `idSanidade` int(1) NOT NULL,
  `idFicha` int(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_san` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `situacao`
--

CREATE TABLE `situacao` (
  `idSituacao` int(2) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `desc_sit` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `situacao_has_habilidades`
--

CREATE TABLE `situacao_has_habilidades` (
  `idSituacao` int(2) NOT NULL,
  `idHabilidades` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  ADD KEY `fk_Jogador` (`idJogador`);

--
-- Indexes for table `ficha_has_inventario`
--
ALTER TABLE `ficha_has_inventario`
  ADD PRIMARY KEY (`idFicha`,`idInventario`),
  ADD KEY `fk_Inv2` (`idInventario`);

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
  ADD PRIMARY KEY (`idSanidade`),
  ADD KEY `fk_Ficha` (`idFicha`);

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
  MODIFY `idAcao` int(1) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `caminho`
--
ALTER TABLE `caminho`
  MODIFY `idCaminho` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cidade`
--
ALTER TABLE `cidade`
  MODIFY `idCidade` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `descendencia`
--
ALTER TABLE `descendencia`
  MODIFY `idDescendencia` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `especializacao`
--
ALTER TABLE `especializacao`
  MODIFY `idEspecializacao` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ficha`
--
ALTER TABLE `ficha`
  MODIFY `idFicha` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `habilidades`
--
ALTER TABLE `habilidades`
  MODIFY `idHabilidades` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `habitos`
--
ALTER TABLE `habitos`
  MODIFY `idHabitos` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `idIdiomas` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventario`
--
ALTER TABLE `inventario`
  MODIFY `idInventario` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jogador`
--
ALTER TABLE `jogador`
  MODIFY `idJogador` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patrono`
--
ALTER TABLE `patrono`
  MODIFY `idPatrono` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `raca`
--
ALTER TABLE `raca`
  MODIFY `idRaca` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reputacao`
--
ALTER TABLE `reputacao`
  MODIFY `idReputacao` int(1) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sanidade`
--
ALTER TABLE `sanidade`
  MODIFY `idSanidade` int(1) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `situacao`
--
ALTER TABLE `situacao`
  MODIFY `idSituacao` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tracos_raciais`
--
ALTER TABLE `tracos_raciais`
  MODIFY `idTracos_Raciais` int(4) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `acao_has_habilidades`
--
ALTER TABLE `acao_has_habilidades`
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
  ADD CONSTRAINT `fk_Jogador` FOREIGN KEY (`idJogador`) REFERENCES `jogador` (`idJogador`),
  ADD CONSTRAINT `fk_cidade` FOREIGN KEY (`idCidade`) REFERENCES `cidade` (`idCidade`),
  ADD CONSTRAINT `fk_raca` FOREIGN KEY (`idRaca`) REFERENCES `raca` (`idRaca`);

--
-- Limitadores para a tabela `ficha_has_inventario`
--
ALTER TABLE `ficha_has_inventario`
  ADD CONSTRAINT `fk_Fic2` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`),
  ADD CONSTRAINT `fk_Inv2` FOREIGN KEY (`idInventario`) REFERENCES `inventario` (`idInventario`);

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
  ADD CONSTRAINT `fk_Ite` FOREIGN KEY (`idItem`) REFERENCES `item` (`idItem`);

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
-- Limitadores para a tabela `sanidade`
--
ALTER TABLE `sanidade`
  ADD CONSTRAINT `fk_Ficha` FOREIGN KEY (`idFicha`) REFERENCES `ficha` (`idFicha`);

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
