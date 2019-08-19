package patrono;

import ficha.Ficha;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import raca.Raca;

import java.util.Set;

@JDBI
public interface PatronoQueries {

    @SqlQuery("SELECT * FROM PATRONO")
    Set<Patrono> findByObject();

    @SqlQuery("SELECT patrono.* FROM FICHA " +
            "RIGHT JOIN ficha_has_patrono ON FICHA.IDFICHA = ficha_has_patrono.IDFICHA " +
            "RIGHT JOIN patrono ON ficha_has_patrono.IDpatrono = patrono.IDpatrono " +
            "WHERE FICHA.IDFICHA = :idFicha")
    Set<Patrono> findByObject(@BindBean Ficha ficha);

    @SqlQuery("SELECT PATRONO.* FROM RACA " +
            "RIGHT JOIN RACA_HAS_PATRONO ON RACA_HAS_PATRONO.IDRACA = RACA.IDRACA " +
            "RIGHT JOIN PATRONO ON PATRONO.IDPATRONO = RACA_HAS_PATRONO.IDPATRONO " +
            "WHERE RACA.IDRACA = :idRaca")
    Set<Patrono> findByObject(@BindBean Raca raca);
}
