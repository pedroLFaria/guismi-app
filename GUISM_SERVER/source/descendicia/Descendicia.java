package descendicia;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Descendicia {

    @Column
    Long id;

    @Column
    String nome;

    @Column
    String descricao;
}
