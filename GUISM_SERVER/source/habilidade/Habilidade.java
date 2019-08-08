package habilidade;

import gasto.Gasto;
import acao.Acao;
import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import situacao.Situacao;

import java.beans.ConstructorProperties;
import java.util.Set;

@Data
@Entity
public class Habilidade {

    @Column
    Long idHabilidade;

    @Column
    String nomeHabilidade;

    @Column
    String atrAtacante;

    @Column
    String tipoHabilidade;

    @Column
    String utiHabilidade;

    @Column
    String descHabilidade;

    @Column
    String prerequisito;

    @Column
    Long nivelRequerido;

    Set<Acao> acoes;

    Set<Gasto> gasto;

    Set<Situacao> situacoes;
}
