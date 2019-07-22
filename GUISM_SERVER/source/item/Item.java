package item;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Item {

    @Column
    Long id;

    @Column
    String nome;

    @Column
    String descricao;

    @Column
    Long peso;

    @Column
    Long valorMagica;

    @Column
    Long valor;

    @Column
    Long moeda;

    @Column
    String iconeItem;

}
