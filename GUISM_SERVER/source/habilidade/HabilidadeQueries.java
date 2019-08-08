package habilidade;

import acao.Acao;
import gasto.Gasto;
import kikaha.jdbi.JDBI;
import lombok.val;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import situacao.Situacao;

import java.util.LinkedHashSet;
import java.util.Set;

@JDBI
public interface HabilidadeQueries {

    @SqlQuery("SELECT * FROM HABILIDADE")
    Set<Habilidade> findAll();

    @SqlQuery("SELECT * FROM habilidade WHERE IDHABILIDADE = :id")
    Habilidade findById(@Bind("id") Long id);

    default Habilidade findByIdWithAllFks(Long id){
        val habilidade = findById( id );
        habilidade.setGasto( findGastoByHabilidadeId(id) );
        return habilidade;
    }

    @SqlQuery("SELECT GASTO.*,HABILIDADE_HAS_GASTO.QUANTIDADEHABILIDADEGASTO FROM HABILIDADE \n" +
            "LEFT JOIN HABILIDADE_HAS_GASTO ON HABILIDADE_HAS_GASTO.IDHABILIDADE = HABILIDADE.IDHABILIDADE \n" +
            "LEFT JOIN GASTO ON HABILIDADE_HAS_GASTO.IDGASTO = GASTO.IDGASTO WHERE HABILIDADE.IDHABILIDADE = :id")
    Set<Gasto> findGastoByHabilidadeId(@Bind("id")Long id);

    @SqlQuery("SELECT HABILIDADE.* FROM RACA LEFT JOIN RACA_HAS_HABILIDADE ON RACA_HAS_HABILIDADE.IDRACA = RACA.IDRACA LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = RACA_HAS_HABILIDADE.IDHABILIDADE WHERE RACA.IDRACA = :idRaca")
    Set<Habilidade> findByIdRacas(@Bind("idRaca")Long idRaca);

    @SqlQuery("SELECT HABILIDADE.* FROM CAMINHO LEFT JOIN CAMINHO_HAS_HABILIDADE ON CAMINHO_HAS_HABILIDADE.IDCAMINHO = CAMINHO.IDCAMINHO LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = CAMINHO_HAS_HABILIDADE.IDHABILIDADE WHERE CAMINHO.IDCAMINHO = :idCaminho")
    Set<Habilidade> findByIdCaminho(@Bind("idCaminho")Long idCaminho);

    @SqlQuery("SELECT HABILIDADE.* FROM DESCENDENCIA LEFT JOIN DESCENDENCIA_HAS_HABILIDADE ON DESCENDENCIA_HAS_HABILIDADE.IDDESCENDENCIA = DESCENDENCIA.IDDESCENDENCIA LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE = DESCENDENCIA_HAS_HABILIDADE.IDHABILIDADE WHERE DESCENDENCIA.IDDESCENDENCIA = :idDescendencia")
    Set<Habilidade> findByIdDescendencia(@Bind("idDescendencia")Long idDescendencia);

    @SqlQuery("SELECT HABILIDADE.* FROM FICHA LEFT JOIN FICHA_HAS_HABILIDADE ON FICHA_HAS_HABILIDADE.IDFICHA = FICHA.IDFICHA LEFT JOIN HABILIDADE ON HABILIDADE.IDHABILIDADE WHERE FICHA.IDFICHA = :idFicha")
    Set<Habilidade> findByIdFicha(@Bind("idFicha")Long idFicha);
}
