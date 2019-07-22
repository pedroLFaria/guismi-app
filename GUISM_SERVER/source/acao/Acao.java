package acao;

import kikaha.jdbi.serializers.Column;
import kikaha.jdbi.serializers.Entity;
import lombok.Data;

@Data
@Entity
public class Acao {

    @Column
    Long id;

    @Column
    String nome;

}
