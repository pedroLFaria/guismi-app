package raca;

import ficha.Ficha;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface RacaQueries {

    @SqlQuery("SELECT RACA.* FROM FICHA " +
            "RIGHT JOIN RACA ON FICHA.IDRACA = RACA.IDRACA " +
            "WHERE FICHA.IDFICHA = :idFicha")
    Raca findByObject(@BindBean Ficha ficha);

    @SqlQuery("SELECT * FROM RACA")
    Set<Raca> findByObject();
}
