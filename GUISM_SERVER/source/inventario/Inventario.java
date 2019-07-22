package inventario;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Inventario {

    @Column
    Long id;

    @Column
    String nome;

}
