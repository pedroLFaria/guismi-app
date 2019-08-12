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

    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO caminho(nome,caminho_desc) VALUES(:nome,:descricao)")
    long insert(@BindBean Caminho caminhho);

    @SqlQuery("SELECT caminho.* FROM ficha " +
            "right JOIN ficha_has_caminho ON ficha.idficha = ficha_has_caminho.idficha " +
            "right JOIN caminho ON ficha_has_caminho.idcaminho = caminho.idcaminho WHERE ficha.idficha = :idFicha")
    Set<Caminho> findByIdFicha(@Bind ("idFicha") long idFicha);

    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO FICHA_HAS_CAMINHO(IDFICHA,IDCAMINHO) VALUES(:idFicha,idCaminho)")
    Long insertFichaHasCaminho(@BindBean Ficha ficha, @BindBean Caminho caminho);

    @SqlQuery("SELECT * FROM CAMINHO")
    Set<Caminho> findAll();
}
