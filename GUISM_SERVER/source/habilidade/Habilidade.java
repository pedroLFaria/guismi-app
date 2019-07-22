package habilidade;

import acao.Acao;
import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Habilidade {

    @Column
    Long idHabilidade;

    @Column
    String nome;

    @Column
    String atributo_ataca;

    @Column
    String tipo;

    @Column
    String gasto1;

    @Column
    String gasto2;

    @Column
    String gasto3;

    @Column
    String utilizacao;

    @Column
    String desc_hab;

    @Column
    String pre_req;

    @Column
    Long nivel_req;

}
