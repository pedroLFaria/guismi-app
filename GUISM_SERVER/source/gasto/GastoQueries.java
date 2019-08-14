package gasto;

import habilidade.Habilidade;
import habito.Habito;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface GastoQueries {

    @SqlQuery("SELECT GASTO.*,HABILIDADE_HAS_GASTO.QUANTIDADEHABILIDADEGASTO FROM HABILIDADE " +
            "RIGHT JOIN HABILIDADE_HAS_GASTO ON HABILIDADE_HAS_GASTO.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "RIGHT JOIN GASTO ON HABILIDADE_HAS_GASTO.IDGASTO = GASTO.IDGASTO WHERE HABILIDADE.IDHABILIDADE = :id")
    Set<Gasto> findByHabilidadeId(@Bind("id")Long id);

    @SqlQuery("SELECT GASTO.*,HABILIDADE_HAS_GASTO.QUANTIDADEHABILIDADEGASTO FROM HABILIDADE " +
            "RIGHT JOIN HABILIDADE_HAS_GASTO ON HABILIDADE_HAS_GASTO.IDHABILIDADE = HABILIDADE.IDHABILIDADE " +
            "RIGHT JOIN GASTO ON HABILIDADE_HAS_GASTO.IDGASTO = GASTO.IDGASTO WHERE HABILIDADE.IDHABILIDADE = :idHabilidade")
    Set<Gasto> findByObject(@BindBean Habilidade habilidade);

    @SqlQuery("SELECT GASTO * WHERE IDGASTO = :id")
    Gasto findById(@Bind("id")Long id);

}
