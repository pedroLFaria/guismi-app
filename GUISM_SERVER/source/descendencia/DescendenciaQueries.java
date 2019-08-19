package descendencia;

import ficha.Ficha;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import raca.Raca;

import java.util.Set;

@JDBI
public interface DescendenciaQueries {


    @SqlQuery("SELECT * FROM DESCENDENCIA")
    Set<Descendencia> findByObject();

    @SqlQuery("SELECT DESCENDENCIA.* FROM FICHA " +
            "RIGHT JOIN FICHA_HAS_DESCENDENCIA ON FICHA_HAS_DESCENDENCIA.IDFICHA = FICHA.IDFICHA " +
            "RIGHT JOIN DESCENDENCIA ON FICHA_HAS_DESCENDENCIA.IDDESCENDENCIA = DESCENDENCIA.IDDESCENDENCIA " +
            "WHERE FICHA.IDFICHA = :idFicha")
    Set<Descendencia> findByObject(@BindBean Ficha ficha);

    @SqlQuery("SELECT DESCENDENCIA.* FROM RACA " +
            "RIGHT JOIN RACA_HAS_DESCENDENCIA ON RACA_HAS_DESCENDENCIA.IDRACA = RACA.IDRACA " +
            "RIGHT JOIN DESCENDENCIA ON DESCENDENCIA.IDDESCENDENCIA = RACA_HAS_DESCENDENCIA.IDDESCENDENCIA " +
            "WHERE RACA.IDRACA = :idRaca")
    Set<Descendencia> findByObject(@BindBean Raca raca);
}
