package tracosRacias;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class TracoRacial {

    @Column
    Long id;

    @Column
    Long idRaca;

    @Column
    String nome;

    @Column
    Long nivel;

    @Column
    String descricao;

}
