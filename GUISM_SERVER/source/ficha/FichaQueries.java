package ficha;

import caminho.Caminho;
import descendencia.Descendencia;
import habilidade.Habilidade;
import habito.Habito;
import idioma.Idioma;
import inventario.Inventario;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import patrono.Patrono;
import situacao.Situacao;

import java.util.Set;

@JDBI
public interface FichaQueries {

    @SqlQuery("SELECT * FROM ficha WHERE IDFICHA = :id")
    Ficha findById(@Bind("id") Long id);

    @SqlQuery("SELECT IDFICHA, NOMEPERSONAGEM, NIVELPERSONAGEM, IMG FROM guism.ficha where IDJOGADOR = :idJogador")
    Set<Ficha> findByIdJogador(@Bind("idJogador") Long id);

    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO FICHA(IDRACA,IDCIDADE,IDJOGADOR,NOMEPERSONAGEM,IMG,IDADE,AFILIACAO,CLA,SORTEDIA,DISTFORCA," +
            "DISTCONSTITUICAO,DISTAGILIDADE,DISTDESTREZA,DISTINTELIGENCIA,DISTSABEDORIA,DISTCARISMA,NIVELPERSONAGEM," +
            "EXPPERSONAGEM,DESCPERSONAGEM,HISTPERSONAGEM,NOTA,IDSANIDADE) VALUES(:idRaca,:idCidade,:idJogador,:nomePersonagem," +
            ":img,:idade,:afiliacao,:cla,:sorteDia,:distForca,:distConstituicao,:distAgilidade,:distDestreza,:distInteligencia," +
            ":distSabedoria,:distCarisma,nivelpersonagem,:expPersonagem,:descPersonagem,:histPersonagem,:nota,:idSanidade)")
    Long insert(@BindBean Ficha ficha);

    @SqlUpdate("UPDATE FICHA SET IDRACA = :idRaca, IDCIDADE = :idCidade, IDJOGADOR = :idJogador, NOMEPERSONAGEM = :nomePersonagem, " +
            "IMG = :img, IDADE = :idade, AFILIACAO = :afiliacao, CLA = :cla, SORTEDIA = :sorteDia, DISTFORCA = :distForca," +
            " DISTCONSTITUICAO = :distConstituicao, DISTAGILIDADE = :distAgilidade, DISTDESTREZA = :distDestreza, " +
            "DISTINTELIGENCIA = :distInteligencia, DISTSABEDORIA = :distSabedoria, DISTCARISMA = :distCarisma, " +
            "NIVELPERSONAGEM = :nivelPersonagem, EXPPERSONAGEM = :expPersonagem, DESCPERSONAGEM = descPersonagem, " +
            "HISTPERSONAGEM = :histPersonagem, NOTA = :nota, IDSANIDADE = :idSanidade  WHERE IDFICHA = :idFicha")
    Boolean update(@BindBean Ficha ficha);

    @SqlUpdate("INSERT INTO FICHA_HAS_CAMINHO(IDFICHA,IDCAMINHO) VALUES(:idFicha,:idCaminho)")
    Boolean insertFichaHasCaminho(@BindBean Ficha ficha, @BindBean Caminho caminho);

    @SqlUpdate("INSERT INTO FICHA_HAS_DESCENDENCIA(IDFICHA,IDDESCENDENCIA) VALUES(:idFicha,:idDescendencia)")
    Boolean insertFichaHasDescendencia(@BindBean Ficha ficha, @BindBean Descendencia descendencia);

    @SqlUpdate("INSERT INTO FICHA_HAS_HABILIDADE(IDFICHA,IDHABILIDADE) VALUES(:idFicha,:idHabilidade)")
    Boolean insertFichaHasHabilidade(@BindBean Ficha ficha, @BindBean Habilidade habilidade);

    @SqlUpdate("INSERT INTO FICHA_HAS_HABITO(IDFICHA,IDHABITO,QTDFICHAHABITO) VALUES(:idFicha,:idHabito,:qtdFichaHabito)")
    Boolean insertFichaHasHabito(@BindBean Ficha ficha, @ BindBean Habito habito);

    @SqlUpdate("INSERT INTO FICHA_HAS_IDIOMA(IDFICHA,IDIDIOMA) VALUES(:idFicha,:idIdioma)")
    Boolean insertFichaHasIdidoma(@BindBean Ficha ficha, @BindBean Idioma idioma);

    @SqlUpdate("INSERT INTO FICHA_HAS_INVENTARIO(IDFICHA,IDINVENTARIO) VALUES(:idFicha, :idInventario)")
    Boolean insertFichaHasInventario(@BindBean Ficha ficha, @BindBean Inventario inventario);

    @SqlUpdate("INSERT INTO FICHA_HAS_PATRONO(IDFICHA,IDPATRONO) VALUES(:idFicha, :idPatrono)")
    Boolean insertFichaHasPatrono(@BindBean Ficha ficha, @BindBean Patrono patrono);

    @SqlUpdate("INSERT INTO FICHA_HAS_SITUACAO(IDFICHA,IDSITUACAO) VALUES(:idFicha, :idSituacao)")
    Boolean insertFichaHasSituacao(@BindBean Ficha ficha, @BindBean Situacao situacao);

    default void cleanFichaJunctionTables(Ficha ficha){
        deleteFichaHasCaminho(ficha);
        deleteFichaHasDescendencia(ficha);
        deleteFichaHasHabilidade(ficha);
        deleteFichaHasHabito(ficha);
        deleteFichaHasIdidoma(ficha);
        deleteFichaHasInventario(ficha);
        deleteFichaHasPatrono(ficha);
        deleteFichaHasSituacao(ficha);
    }

    @SqlUpdate("delete from ficha_has_caminho where IDFICHA = :idFicha")
    Boolean deleteFichaHasCaminho(@BindBean Ficha ficha);

    @SqlUpdate("delete from ficha_has_descendencia where IDFICHA = :idFicha")
    Boolean deleteFichaHasDescendencia(@BindBean Ficha ficha);

    @SqlUpdate("delete from  ficha_has_habilidade where IDFICHA = :idFicha")
    Boolean deleteFichaHasHabilidade(@BindBean Ficha ficha);

    @SqlUpdate("delete from  ficha_has_habito where IDFICHA = :idFicha")
    Boolean deleteFichaHasHabito(@BindBean Ficha ficha);

    @SqlUpdate("delete from  ficha_has_idioma where IDFICHA = :idFicha")
    Boolean deleteFichaHasIdidoma(@BindBean Ficha ficha);

    @SqlUpdate("delete from  ficha_has_inventario where IDFICHA = :idFicha")
    Boolean deleteFichaHasInventario(@BindBean Ficha ficha);

    @SqlUpdate("delete from  ficha_has_patrono where IDFICHA = :idFicha")
    Boolean deleteFichaHasPatrono(@BindBean Ficha fichao);

    @SqlUpdate("delete from  ficha_has_situacao where IDFICHA = :idFicha")
    Boolean deleteFichaHasSituacao(@BindBean Ficha ficha);

}
