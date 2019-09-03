package acao;

import habilidade.Habilidade;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.Set;

@JDBI
public interface AcaoQueries {

    @SqlQuery("SELECT ACAO.* FROM HABILIDADE " +
            "RIGHT JOIN HABILIDADE_HAS_ACAO ON HABILIDADE_HAS_ACAO.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "RIGHT JOIN ACAO ON HABILIDADE_HAS_ACAO.IDACAO = ACAO.IDACAO " +
            "WHERE HABILIDADE.IDHABILIDADE =   :idHabilidade")
    Set<Acao> findByIdObject(@BindBean Habilidade habilidade);

    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO acao(nome) VALUES(:nome)")
    long insert(@BindBean Acao acao);


}
