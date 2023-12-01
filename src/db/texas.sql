SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema aeo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema aeo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `aeo` DEFAULT CHARACTER SET utf8 ;
USE `aeo` ;

-- -----------------------------------------------------
-- Table `aeo`.`alunos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aeo`.`alunos` (
  `idAlunos` INT(1) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `idade` VARCHAR(2) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`idAlunos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `aeo`.`professores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aeo`.`professores` (
  `idProfessores` INT(1) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `disciplina` INT(45) NOT NULL,
  `telefone` INT(11) NOT NULL,
  PRIMARY KEY (`idProfessores`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `aeo`.`disciplina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aeo`.`disciplina` (
  `idDisciplina` INT(1) NOT NULL,
  `nome_disciplina` VARCHAR(255) NOT NULL,
  `carga_horaria` VARCHAR(3) NOT NULL,
  `alunos_idAlunos` INT(11) NOT NULL,
  `professores_idProfessores` INT(1) NOT NULL,
  PRIMARY KEY (`idDisciplina`, `alunos_idAlunos`, `professores_idProfessores`),
  INDEX `fk_disciplina_alunos_idx` (`alunos_idAlunos` ASC) VISIBLE,
  INDEX `fk_disciplina_professores1_idx` (`professores_idProfessores` ASC) VISIBLE,
  CONSTRAINT `fk_disciplina_alunos`
    FOREIGN KEY (`alunos_idAlunos`)
    REFERENCES `aeo`.`alunos` (`idAlunos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_disciplina_professores1`
    FOREIGN KEY (`professores_idProfessores`)
    REFERENCES `aeo`.`professores` (`idProfessores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;