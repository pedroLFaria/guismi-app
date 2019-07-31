package raca;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface RacaQueries {

    @SqlQuery("SELECT * FROM RACA")
    Set<Raca> findAll();
}
