package habilidade;

import caminho.Caminho;
import descendencia.Descendencia;
import ficha.Ficha;
import gasto.Gasto;
import kikaha.jdbi.JDBI;
import lombok.val;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import raca.Raca;

import java.util.Set;

@JDBI
public interface HabilidadeQueries {

    @SqlQuery("SELECT * FROM HABILIDADE")
    Set<Habilidade> findAll();

    @SqlQuery("SELECT * FROM habilidade WHERE IDHABILIDADE = :id")
    Habilidade findById(@Bind("id") Long id);

    @SqlQuery("SELECT HABILIDADE.* FROM RACA " +
            "RIGHT JOIN RACA_HAS_HABILIDADE ON RACA_HAS_HABILIDADE.IDRACA = RACA.IDRACA " +
            "RIGHT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = RACA_HAS_HABILIDADE.IDHABILIDADE " +
            "WHERE RACA.IDRACA = :idRaca")
    Set<Habilidade> findByIdRacas(@Bind("idRaca")Long idRaca);

    @SqlQuery("SELECT HABILIDADE.* FROM CAMINHO " +
            "RIGHT JOIN CAMINHO_HAS_HABILIDADE ON CAMINHO_HAS_HABILIDADE.IDCAMINHO = CAMINHO.IDCAMINHO " +
            "RIGHT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = CAMINHO_HAS_HABILIDADE.IDHABILIDADE " +
            "WHERE CAMINHO.IDCAMINHO = :idCaminho")
    Set<Habilidade> findByIdCaminho(@Bind("idCaminho")Long idCaminho);

    @SqlQuery("SELECT HABILIDADE.* FROM DESCENDENCIA " +
            "RIGHT JOIN DESCENDENCIA_HAS_HABILIDADE ON DESCENDENCIA_HAS_HABILIDADE.IDDESCENDENCIA = DESCENDENCIA.IDDESCENDENCIA " +
            "RIGHT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = DESCENDENCIA_HAS_HABILIDADE.IDHABILIDADE " +
            "WHERE DESCENDENCIA.IDDESCENDENCIA = :idDescendencia")
    Set<Habilidade> findByIdDescendencia(@Bind("idDescendencia")Long idDescendencia);

    @SqlQuery("SELECT HABILIDADE.* FROM FICHA " +
            "RIGHT JOIN FICHA_HAS_HABILIDADE ON FICHA.IDFICHA = FICHA_HAS_HABILIDADE.IDFICHA " +
            "RIGHT JOIN HABILIDADE ON ficha_has_habilidade.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "WHERE FICHA.IDFICHA =:idFicha")
    Set<Habilidade> findByIdFicha(@Bind("idFicha")Long idFicha);

    @SqlQuery("SELECT * FROM HABILIDADE")
    Set<Habilidade> findByObject();

    @SqlQuery("SELECT HABILIDADE.* FROM RACA " +
            "RIGHT JOIN RACA_HAS_HABILIDADE ON RACA_HAS_HABILIDADE.IDRACA = RACA.IDRACA " +
            "RIGHT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = RACA_HAS_HABILIDADE.IDHABILIDADE " +
            "WHERE RACA.IDRACA = :idRaca")
    Set<Habilidade> findByObject(@BindBean Raca raca);

    @SqlQuery("SELECT HABILIDADE.* FROM CAMINHO " +
            "RIGHT JOIN CAMINHO_HAS_HABILIDADE ON CAMINHO_HAS_HABILIDADE.IDCAMINHO = CAMINHO.IDCAMINHO " +
            "RIGHT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = CAMINHO_HAS_HABILIDADE.IDHABILIDADE " +
            "WHERE CAMINHO.IDCAMINHO = :idCaminho")
    Set<Habilidade> findByObject(@BindBean Caminho caminho);

    @SqlQuery("SELECT HABILIDADE.* FROM DESCENDENCIA " +
            "RIGHT JOIN DESCENDENCIA_HAS_HABILIDADE ON DESCENDENCIA_HAS_HABILIDADE.IDDESCENDENCIA = DESCENDENCIA.IDDESCENDENCIA " +
            "RIGHT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = DESCENDENCIA_HAS_HABILIDADE.IDHABILIDADE " +
            "WHERE DESCENDENCIA.IDDESCENDENCIA = :idDescendencia")
    Set<Habilidade> findByObject(@BindBean Descendencia descendencia);

    @SqlQuery("SELECT HABILIDADE.* FROM FICHA " +
            "RIGHT JOIN FICHA_HAS_HABILIDADE ON FICHA.IDFICHA = FICHA_HAS_HABILIDADE.IDFICHA " +
            "RIGHT JOIN HABILIDADE ON ficha_has_habilidade.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "WHERE FICHA.IDFICHA =:idFicha")
    Set<Habilidade> findByObject(@BindBean Ficha ficha);
}
