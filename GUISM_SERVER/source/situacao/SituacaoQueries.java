package situacao;

import ficha.Ficha;
import habilidade.Habilidade;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.Set;

@JDBI
public interface SituacaoQueries {

    @SqlQuery("SELECT SITUACAO.* FROM HABILIDADE " +
            "RIGHT JOIN HABILIDADE_HAS_SITUACAO ON HABILIDADE_HAS_SITUACAO.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "RIGHT JOIN SITUACAO ON HABILIDADE_HAS_SITUACAO.IDSITUACAO = SITUACAO.IDSITUACAO " +
            "WHERE HABILIDADE.IDHABILIDADE = :idHabilidade")
    Set<Situacao> findByObject(@BindBean Habilidade habilidade);

    @SqlQuery("SELECT SITUACAO.* FROM FICHA " +
            "RIGHT JOIN FICHA_HAS_SITUACAO ON FICHA.IDFICHA = FICHA_HAS_SITUACAO.IDFICHA " +
            "RIGHT JOIN SITUACAO ON FICHA_HAS_SITUACAO.IDSITUACAO = SITUACAO.IDSITUACAO " +
            "WHERE FICHA.IDFICHA = :idFicha")
    Set<Situacao> findByObject(@BindBean Ficha ficha);

    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO situacao (IDSITUACAO, NOMESITUACAO, DESCSITUACAO) VALUES(:idSituacao, :nomeSituacao, :descSituacao)")
    Long insert(@BindBean Situacao situacao);

    @SqlUpdate("UPDATE situacao SET  NOMESITUACAO = :nomeSituacao, DESCSITUACAO = :descSituacao WHERE IDSITUACAO = :idSituacao")
    Boolean update(@BindBean Situacao situacao);

    @SqlUpdate("DELETE situacao WHERE IDSITUACAO = :idSituacao")
    Boolean delete(@Bind("idSituacao") Long idSituacao);
}
