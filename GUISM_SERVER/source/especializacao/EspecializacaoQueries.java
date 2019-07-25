package especializacao;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.yaml.snakeyaml.external.com.google.gdata.util.common.base.Escaper;

import java.util.Set;

@JDBI
public interface EspecializacaoQueries {

    @SqlQuery("SELECT * FROM ESPECIALIZACAO")
    Set<Especializacao> findAll();

    @SqlQuery("SELECT ESPECIALIZACAO.* FROM FICHA LEFT JOIN FICHA_HAS_ESPECIALIZACAO ON FICHA_HAS_ESPECIALIZACAO.IDFICHA = FICHA.IDFICHA " +
            "LEFT JOIN ESPECIALIZACAO ON FICHA_HAS_ESPECIALIZACAO.IDESPECIALIZACAO = ESPECIALIZACAO.IDESPECIALIZACAO WHERE FICHA.IDFICHA = :idFicha")
    Set<Especializacao> findEspecializacaoByIdFicha(@Bind("idFicha")Long idFicha);

    @SqlQuery("SELECT ESPECIALIZACAO.* FROM RACA LEFT JOIN RACA_HAS_ESPECIALIZACAO ON RACA_HAS_ESPECIALIZACAO.IDRACA = RACA.IDRACA " +
            "LEFT JOIN ESPECIALIZACAO ON ESPECIALIZACAO.IDESPECIALIZACAO = RACA_HAS_ESPECIALIZACAO.IDESPECIALIZACAO WHERE RACA.IDRACA = :idRaca")
    Set<Especializacao> findByIdRaca(@Bind("idRaca")Long idRca);

    @SqlQuery("SELECT ESPECIALIZACAO.* FROM HABITO LEFT JOIN HABITO_HAS_ESPECIALIZACAO ON HABITO_HAS_ESPECIALIZACAO.IDHABITO = HABITO.IDHABITO " +
            "LEFT JOIN ESPECIALIZACAO ON ESPECIALIZACAO.IDESPECIALIZACAO = HABITO_HAS_ESPECIALIZACAO.IDESPECIALIZACAO WHERE HABITO.IDHABITO = :idHabito")
    Set<Especializacao> findByIdHabito(@Bind("IdHabito")Long idRaca);
    

}
