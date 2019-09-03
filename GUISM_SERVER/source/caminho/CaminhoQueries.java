package caminho;

import ficha.Ficha;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface CaminhoQueries {

    @SqlQuery("SELECT caminho.* FROM ficha " +
            "RIGHT JOIN ficha_has_caminho ON ficha.idficha = ficha_has_caminho.idficha " +
            "RIGHT JOIN caminho ON ficha_has_caminho.idcaminho = caminho.idcaminho " +
            "WHERE ficha.idficha = :idFicha")
    Set<Caminho> findByObject(@BindBean Ficha ficha);

    @SqlQuery("SELECT * FROM CAMINHO")
    Set<Caminho> findByObject();
}
