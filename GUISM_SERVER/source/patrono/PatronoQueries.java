package patrono;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface PatronoQueries {

    @SqlQuery("SELECT patrono.* FROM FICHA LEFT JOIN ficha_has_patrono ON FICHA.IDFICHA = ficha_has_patrono.IDFICHA " +
            "LEFT JOIN patrono ON ficha_has_patrono.IDpatrono = patrono.IDpatrono  WHERE FICHA.IDFICHA = :idFicha")
    Set<Patrono> findByIdFicha(@Bind("idFicha")Long id);
}
