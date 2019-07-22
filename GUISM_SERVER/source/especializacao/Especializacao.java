package especializacao;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Especializacao {

    @Column
    Long id;

    @Column
    String nome;

    @Column
    String descricao;
}
