package acao;


import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

@JDBI
public interface AcaoQueries {

    @SqlQuery("SELECT * FROM acao WHERE id = :id")
    Acao findByID(@Bind("id")Long id);

    @GetGeneratedKeys
    @SqlQuery("INSERT INTO acao(nome) VALUES(:nome)")
    long insert(@Bind Acao acao);

}
