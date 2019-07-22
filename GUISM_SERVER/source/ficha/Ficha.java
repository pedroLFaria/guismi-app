package ficha;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Ficha {

    @Column
    Long id;

    @Column
    Long idRaca;

    @Column
    Long idCidade;

    @Column
    Long idJogador;

    @Column
    String nomePersongagem;

    @Column
    String img;

    @Column
    Long idade;

    @Column
    String afiliacao;

    @Column
    String cla;

    @Column
    Long sorteDoDia;

    @Column
    Long forcaDistribuida;

    @Column
    Long conDistribuida;

    @Column
    Long agiDistribuida;

    @Column
    Long desDistribuida;

    @Column
    Long intDistribuida;

    @Column
    Long sabDistribuida;

    @Column
    Long carDistribuida;

    @Column
    Long nivelPersonagem;

    @Column
    Long experienciaPersonagem;

    @Column
    String descricaoPersonagem;

    @Column
    String historiaPersonagem;

    @Column
    String nota;

    @Column
    Long idSanidae;
}

