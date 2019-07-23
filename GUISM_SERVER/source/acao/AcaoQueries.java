package acao;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.config.RegisterConstructorMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.BindMap;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.List;
import java.util.Set;

@JDBI
public interface AcaoQueries {

    @SqlQuery("SELECT * FROM acao WHERE idAcao = :id")
    Acao findByID(@Bind("id")Long id);

    @SqlQuery("SELECT acao.* FROM habilidades LEFT JOIN acao_has_habilidades ON habilidades.idhabilidades = acao_has_habilidades.idhabilidades  " +
            "LEFT JOIN acao ON acao_has_habilidades.idacao = acao.idacao WHERE habilidades.idhabilidades = :idHabilidade")
    Set<Acao> findByHabilidadeId(@Bind("idHabilidade")Long idHabilidade);

    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO acao(nome) VALUES(:nome)")
    long insert(@BindBean Acao acao);


}
