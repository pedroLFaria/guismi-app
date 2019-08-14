package situacao;

import ficha.Ficha;
import habilidade.Habilidade;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface SituacaoQueries {

    @SqlQuery("SELECT * FROM situacao where IDSITUACAO = :id")
    Situacao findById(@Bind("id")Long id);

    @SqlQuery("SELECT SITUACAO.* FROM HABILIDADE LEFT JOIN HABILIDADE_HAS_SITUACAO ON HABILIDADE_HAS_SITUACAO.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "LEFT JOIN SITUACAO ON HABILIDADE_HAS_SITUACAO.IDSITUACAO = SITUACAO.IDSITUACAO WHERE HABILIDADE.IDHABILIDADE = :idHabilidade")
    Set<Situacao> findByIdHabilidade(@Bind("idHabilidade")Long idHabilidade);

    @SqlQuery("SELECT SITUACAO.* FROM FICHA LEFT JOIN FICHA_HAS_SITUACAO ON FICHA.IDFICHA = FICHA_HAS_SITUACAO.IDFICHA " +
            "LEFT JOIN SITUACAO ON FICHA_HAS_SITUACAO.IDSITUACAO = SITUACAO.IDSITUACAO WHERE FICHA.IDFICHA = :idFicha")
    Set<Situacao> findByIdFicha(@Bind("idFicha")Long idFicha);

    @SqlQuery("SELECT SITUACAO.* FROM HABILIDADE LEFT JOIN HABILIDADE_HAS_SITUACAO ON HABILIDADE_HAS_SITUACAO.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "LEFT JOIN SITUACAO ON HABILIDADE_HAS_SITUACAO.IDSITUACAO = SITUACAO.IDSITUACAO WHERE HABILIDADE.IDHABILIDADE = :idHabilidade")
    Set<Situacao> findByObject(@BindBean Habilidade habilidade);

    @SqlQuery("SELECT SITUACAO.* FROM FICHA LEFT JOIN FICHA_HAS_SITUACAO ON FICHA.IDFICHA = FICHA_HAS_SITUACAO.IDFICHA " +
            "LEFT JOIN SITUACAO ON FICHA_HAS_SITUACAO.IDSITUACAO = SITUACAO.IDSITUACAO WHERE FICHA.IDFICHA = :idFicha")
    Set<Situacao> findByObject(@BindBean Ficha ficha);
}
