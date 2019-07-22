package raca;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Raca{

    @Column
    Long id;

    @Column
    String nome;

    @Column
    String raridade;

    @Column
    String descricao;

    @Column
    String longevidade;

    @Column
    String tracosFisicas;

    @Column
    String cultura;

    @Column
    String historia;

    @Column
    Long forRaca;

    @Column
    Long conRaca;

    @Column
    Long agiRaca;

    @Column
    Long desRaca;

    @Column
    Long intRaca;

    @Column
    Long sabRaca;

    @Column
    Long carRaca;

    @Column
    Long sangue;

    @Column
    Long vigor;
}
