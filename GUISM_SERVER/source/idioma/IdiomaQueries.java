package idioma;

import ficha.Ficha;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import raca.Raca;

import java.util.Set;

@JDBI
public interface IdiomaQueries {

    @SqlQuery("SELECT idioma.* FROM FICHA " +
            "RIGHT JOIN ficha_has_idioma ON FICHA.IDFICHA = ficha_has_idioma.IDFICHA " +
            "RIGHT JOIN idioma ON ficha_has_idioma.IDIDIOMA = idioma.IDIDIOMA " +
            "WHERE FICHA.IDFICHA = :idFicha")
    Set<Idioma> findByObject(@BindBean Ficha Ficha);

    @SqlQuery("SELECT IDIOMA.* FROM RACA " +
            "RIGHT JOIN RACA_HAS_IDIOMA ON RACA_HAS_IDIOMA.IDRACA = RACA.IDRACA " +
            "RIGHT JOIN IDIOMA ON IDIOMA.IDIDIOMA = RACA_HAS_IDIOMA.IDIDIOMA " +
            "WHERE RACA.IDRACA = :idRaca")
    Set<Idioma> findByObject(@BindBean Raca raca);

    @SqlQuery("SELECT * FROM IDIOMA")
    Set<Idioma> findByObject();
}
