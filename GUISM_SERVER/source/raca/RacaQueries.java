package raca;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface RacaQueries {

    @SqlQuery("SELECT RACA.* FROM FICHA LEFT JOIN RACA ON FICHA.IDRACA = RACA.IDRACA WHERE FICHA.IDFICHA = :idFicha")
    Raca findByIdFicha(@Bind("idFicha")Long id);

    @SqlQuery("SELECT * FROM RACA")
    Set<Raca> findAll();
}
