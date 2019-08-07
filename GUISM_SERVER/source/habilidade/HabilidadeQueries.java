package habilidade;

import ficha.Ficha;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.Set;

@JDBI
public interface HabilidadeQueries {

    @SqlQuery("SELECT * FROM HABILIDADE")
    Set<Habilidade> findAll();

    @SqlQuery("SELECT * FROM habilidade WHERE IDHABILIDADE = :id")
    Habilidade findById(@Bind("id") Long id);

    @SqlQuery("SELECT HABILIDADE.* FROM RACA LEFT JOIN RACA_HAS_HABILIDADE ON RACA_HAS_HABILIDADE.IDRACA = RACA.IDRACA LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = RACA_HAS_HABILIDADE.IDHABILIDADE WHERE RACA.IDRACA = :idRaca")
    Set<Habilidade> findByIdRacas(@Bind("idRaca")Long idRaca);

    @SqlQuery("SELECT HABILIDADE.* FROM CAMINHO LEFT JOIN CAMINHO_HAS_HABILIDADE ON CAMINHO_HAS_HABILIDADE.IDCAMINHO = CAMINHO.IDCAMINHO LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = CAMINHO_HAS_HABILIDADE.IDHABILIDADE WHERE CAMINHO.IDCAMINHO = :idCaminho")
    Set<Habilidade> findByIdCaminho(@Bind("idCaminho")Long idCaminho);

    @SqlQuery("SELECT HABILIDADE.* FROM DESCENDENCIA LEFT JOIN DESCENDENCIA_HAS_HABILIDADE ON DESCENDENCIA_HAS_HABILIDADE.IDDESCENDENCIA = DESCENDENCIA.IDDESCENDENCIA LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = DESCENDENCIA_HAS_HABILIDADE.IDHABILIDADE WHERE DESCENDENCIA.IDDESCENDENCIA = :idDescendencia")
    Set<Habilidade> findByIdDescendencia(@Bind("idDescendencia")Long idDescendencia);

    @SqlQuery("SELECT HABILIDADE.* FROM FICHA LEFT JOIN FICHA_HAS_HABILIDADE ON FICHA_HAS_HABILIDADE.IDFICHA = FICHA.IDFICHA LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE WHERE FICHA.IDFICHA = :idFicha")
    Set<Habilidade> findByIdFicha(@Bind("idFicha")Long idFicha);
}
