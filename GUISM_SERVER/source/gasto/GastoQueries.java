package gasto;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface GastoQueries {

    @SqlQuery("SELECT GASTO.*,HABILIDADE_HAS_GASTO.QUANTIDADEHABILIDADEGASTO FROM HABILIDADE \n" +
            "LEFT JOIN HABILIDADE_HAS_GASTO ON HABILIDADE_HAS_GASTO.IDHABILIDADE = HABILIDADE.IDHABILIDADE \n" +
            "LEFT JOIN GASTO ON HABILIDADE_HAS_GASTO.IDGASTO = GASTO.IDGASTO WHERE HABILIDADE.IDHABILIDADE = :id")
    Set<Gasto> findByHabilidadeId(@Bind("id")Long id);

    @SqlQuery("SELECT GASTO * WHERE IDGASTO = :id")
    Gasto findById(@Bind("id")Long id);

}
