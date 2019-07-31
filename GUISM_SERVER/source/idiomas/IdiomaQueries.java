package idiomas;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface IdiomaQueries {

    @SqlQuery("SELECT idioma.* FROM FICHA LEFT JOIN ficha_has_idioma ON FICHA.IDFICHA = ficha_has_idioma.IDFICHA " +
            "LEFT JOIN idioma ON ficha_has_idioma.IDIDIOMA = idioma.IDIDIOMA WHERE FICHA.IDFICHA = :idFicha")
    Set<Idioma> findByIdFicha(@Bind("idFicha")Long idFicha);

    @SqlQuery("SELECT * FROM IDIOMA")
    Set<Idioma> findAll();
}
