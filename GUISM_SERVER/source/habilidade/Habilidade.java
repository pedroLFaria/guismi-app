package habilidade;

import acao.Acao;
import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Habilidade {

    @Column
    Long id;

    @Column
    String nome;

    @Column
    String atributoAtaque;

    @Column
    String passiva;

    @Column
    String gasto1;

    @Column
    String gasto2;

    @Column
    String gasto3;

    @Column
    String utilizacao;

    @Column
    String descricao;

    @Column
    String preRequisito;

    @Column
    Long nivelRequisito;

}
