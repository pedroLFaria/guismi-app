package habilidade;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

@JDBI
public interface HabilidadeQueries {

    @SqlQuery("SELECT * FROM habilidade WHERE IDHABILIDADE = :id")
    Habilidade findById(@Bind("id") Long id);
}
