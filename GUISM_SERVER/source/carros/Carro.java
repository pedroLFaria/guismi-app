package carros;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Carro {

    @Column
    Long id;

    @Column
    String nome;

}
