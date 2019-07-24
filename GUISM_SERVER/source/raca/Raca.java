package raca;

import descendencia.Descendencia;
import especializacao.Especializacao;
import habilidade.Habilidade;
import habitos.Habito;
import idiomas.Idioma;
import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;
import patrono.Patrono;

import java.util.Set;

@Data
@Entity
public class Raca{

    @Column
    Long idRaca;

    @Column
    String nomeRaca;

    @Column
    String raridadeRaca;

    @Column
    String descRaca;

    @Column
    String longevidadeRaca;

    @Column
    String TRACOSFISIOLOGICOS;

    @Column
    String culturaRaca;

    @Column
    String historiaRaca;

    @Column
    Long racaForca;

    @Column
    Long racaCon;

    @Column
    Long racaAgi;

    @Column
    Long racaDes;

    @Column
    Long racaInt;

    @Column
    Long racaSab;

    @Column
    Long racaCar;

    @Column
    Long sangue;

    @Column
    Long vigor;

    Set<Descendencia> descendencias;

    Set<Especializacao> especializacoes;

    Set<Habilidade> habilidades;

    Set<Habito> habitos;

    Set<Idioma> idiomas;

    Set<Patrono> patronos;
}
