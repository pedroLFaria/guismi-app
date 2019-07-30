package habitos;

import especializacao.Especializacao;
import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Habito {

    @Column
    Long idHabito;

    @Column
    String nomeHabito;

    @Column
    String descHabito;

    Set<Especializacao> especializacoes;
}
