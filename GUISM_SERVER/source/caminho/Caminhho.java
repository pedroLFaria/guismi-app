package caminho;

import habilidade.Habilidade;
import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Caminhho {

    @Column
    Long id;

    @Column
    String nome;

    @Column
    String descricao;


    Habilidade[] habilidades;

}
