package carros;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Carro {

    @Column
    Long idCarro;

    @Column
    String nomeCarro;

}
