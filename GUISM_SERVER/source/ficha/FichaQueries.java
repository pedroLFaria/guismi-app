package ficha;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

@JDBI
public interface FichaQueries {

    @SqlQuery("SELECT * FROM ficha WHERE IDFICHA = :id")
    Ficha findById(@Bind("id") Long id);
}
