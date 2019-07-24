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
    Long id;

    @Column
    String nome;

    @Column
    String descricaoHabitos;

    Set<Especializacao> especializacoes;
}
