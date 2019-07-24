package acao;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;
import org.jdbi.v3.core.mapper.reflect.ColumnName;

@Data
@Entity
public class Acao {

    @Column
    Long idAcao;

    @Column
    String nomeacao;

}
