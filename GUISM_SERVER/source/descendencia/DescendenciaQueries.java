package descendencia;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import sun.security.krb5.internal.crypto.Des;

import java.util.Set;

@JDBI
public interface DescendenciaQueries {

    @SqlQuery("SELECT * FROM DESCENDENCIA")
    Set<Descendencia> findAll();

    @SqlQuery("SELECT DESCENDENCIA.* FROM FICHA LEFT JOIN FICHA_HAS_DESCENDENCIA ON FICHA_HAS_DESCENDENCIA.IDFICHA = FICHA.IDFICHA " +
            "LEFT JOIN DESCENDENCIA ON FICHA_HAS_DESCENDENCIA.IDDESCENDENCIA = DESCENDENCIA.IDDESCENDENCIA WHERE FICHA.IDFICHA = :idFicha")
    Set<Descendencia> findByIdFicha(@Bind("idFicha")Long idFicha);

    @SqlQuery("SELECT DESCENDENCIA.* FROM RACA LEFT JOIN RACA_HAS_DESCENDENCIA ON RACA_HAS_DESCENDENCIA.IDRACA = RACA.IDRACA " +
            "LEFT JOIN DESCENDENCIA ON DESCENDENCIA.IDDESCENDENCIA = RACA_HAS_DESCENDENCIA.IDDESCENDENCIA WHERE RACA.IDRACA = :idRaca")
    Set<Descendencia> findByIdRaca(@Bind("IdRaca")Long idRaca);
}
