package caminho;

import ficha.Ficha;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.Set;

@JDBI
public interface CaminhoQueries {

    @SqlQuery("SELECT FROM caminho WHERE idCaminho = :id")
    Caminho findById(@Bind("id") Long id);

    @SqlQuery("SELECT caminho.* FROM ficha " +
            "RIGHT JOIN ficha_has_caminho ON ficha.idficha = ficha_has_caminho.idficha " +
            "RIGHT JOIN caminho ON ficha_has_caminho.idcaminho = caminho.idcaminho WHERE ficha.idficha = :idFicha")
    Set<Caminho> findByIdFicha(@Bind ("idFicha") Long idFicha);

    @SqlQuery("SELECT * FROM CAMINHO")
    Set<Caminho> findAll();

    @SqlQuery("SELECT caminho.* FROM ficha " +
            "RIGHT JOIN ficha_has_caminho ON ficha.idficha = ficha_has_caminho.idficha " +
            "RIGHT JOIN caminho ON ficha_has_caminho.idcaminho = caminho.idcaminho " +
            "WHERE ficha.idficha = :idFicha")
    Set<Caminho> findByObject(@BindBean Ficha ficha);

    @SqlQuery("SELECT * FROM CAMINHO")
    Set<Caminho> findByObject();
}
