package ficha;

import caminho.Caminho;
import habilidade.Habilidade;
import habito.Habito;
import idioma.Idioma;
import inventario.Inventario;
import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import patrono.Patrono;
import situacao.Situacao;

@JDBI
public interface FichaQueries {

    @SqlQuery("SELECT * FROM ficha WHERE IDFICHA = :id")
    Ficha findById(@Bind("id") Long id);

    @SqlQuery("INSERT INTO FICHA(IDRACA,IDCIDADE,IDJOGADOR,NOMEPERSONAGEM,IMG,IDADE,AFILIACAO,CLA,SORTEDIA,DISTFORCA," +
            "DISTCONSTITUICAO,DISTAGILIDADE,DISTDESTREZA,DISTINTELIGENCIA,DISTSABEDORIA,DISTCARISMA,NIVELPERSONAGEM," +
            "EXPPERSONAGEM,DESCPERSONAGEM,HISTPERSONAGEM,NOTA,IDSANIDADE) VALUES(:IDRACA,:IDCIDADE,:IDJOGADOR,:NOMEPERSONAGEM," +
            ":IMG,:IDADE,:AFILIACAO,:CLA,:SORTEDIA,:DISTFORCA,:DISTCONSTITUICAO,:DISTAGILIDADE,:DISTDESTREZA,:DISTINTELIGENCIA," +
            ":DISTSABEDORIA,DISTCARISMA,NIVELPERSONAGEM,:EXPPERSONAGEM,:DESCPERSONAGEM,:HISTPERSONAGEM,:NOTA,:IDSANIDADE)")
    Long insert(@BindBean Ficha ficha);

    @SqlQuery("IDRACA = :idRaca, IDCIDADE = :idCidade, IDJOGADOR = :idJogador, NOMEPERSONAGEM = :nomePersonagem, " +
            "IMG = :img, IDADE = :idade, AFILIACAO = :afiliacao, CLA = :cla, SORTEDIA = :sorteDia, DISTFORCA = :distForca," +
            " DISTCONSTITUICAO = :distConstituicao, DISTAGILIDADE = :distAgilidade, DISTDESTREZA = :distDestreza, " +
            "DISTINTELIGENCIA = :distInteligencia, DISTSABEDORIA = :disSabedoria, DISTCARISMA = :distCarisma, " +
            "NIVELPERSONAGEM = :nivelPersonagem, EXPPERSONAGEM = :expPersonagem, DESCPERSONAGEM = descPersonagem, " +
            "HISTPERSONAGEM = :histPersonagem, NOTA = :nota, IDSANIDADE = :sanidade  WHERE IDFICHA = :idFicha")
    Integer update(@BindBean Ficha ficha);

    @SqlQuery("INSERT INTO FICHA_HAS_CAMINHO(IDFICHA,IDCAMINHO) VALUES(:idFicha,:idCaminho)")
    Long insertFichaHasCaminho(@BindBean Ficha ficha, @BindBean Caminho caminho);

    @SqlQuery("INSERT INTO FICHA_HAS_DESCENDENCIA(IDFICHA,IDDESCENDENCIA) VALUES(:idFicha,:idDescendencia")
    Long insertFichaHasDescendencia(@BindBean Ficha ficha, @BindBean Caminho caminho);

    @SqlQuery("INSERT INTO FICHA_HAS_HABILIDADE(IDFICHA,IDHABILIDADE) VALUES(:idFicha,idHabilidade")
    Long insertFichaHasHabilidade(@BindBean Ficha ficha, @BindBean Habilidade habilidade);

    @SqlQuery("INSERT INTO FICHA_HAS_HABITO(IDFICHA,IDHABITO,QTDFICHAHABITO) VALUES(:idFicha,:idHabito,:qtdFichaHabito)")
    Long insertFichaHasHabito(@BindBean Ficha ficha, @ BindBean Habito habito);

    @SqlQuery("INSERT INTO FICHA_HAS_IDIOMA(IDFICHA,IDIDIOMA) VALUES(:idFicha,:idIdioma)")
    Long insertFichaHasIdidoma(@BindBean Ficha ficha, @BindBean Idioma idioma);

    @SqlQuery("INSERT INTO FICHA_HAS_INVENTARIO(IDFICHA,IDINVENTARIO) VALUES(:idFicha, :idInventario)")
    Long insertFichaHasInventario(@BindBean Ficha ficha, @BindBean Inventario inventario);

    @SqlQuery("INSERT INTO FICHA_HAS_PATRONO(IDFICHA,IDPATRONO) VALUES(:idFicha, :idPatrono)")
    Long insertFichaHasPatrono(@BindBean Ficha ficha, @BindBean Patrono patrono);

    @SqlQuery("INSERT INTO FICHA_HAS_SITUACAO(IDFICHA,IDSITUACAO) VALUES(:idFicha, :idSituacao)")
    Long insertFichaHasSituacao(@BindBean Ficha ficha, @BindBean Situacao situacao);

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

    @SqlQuery("delete from ficha_has_caminho where IDFICHA = :idFicha")
    Void deleteFichaHasCaminho(@BindBean Ficha ficha);

    @SqlQuery("delete from ficha_has_descendencia where IDFICHA = :idFicha")
    Void deleteFichaHasDescendencia(@BindBean Ficha ficha);

    @SqlQuery("delete from  ficha_has_habilidade where IDFICHA = :idFicha")
    Void deleteFichaHasHabilidade(@BindBean Ficha ficha);

    @SqlQuery("delete from  ficha_has_habito where IDFICHA = :idFicha")
    Void deleteFichaHasHabito(@BindBean Ficha ficha);

    @SqlQuery("delete from  ficha_has_idioma where IDFICHA = :idFicha")
    Void deleteFichaHasIdidoma(@BindBean Ficha ficha);

    @SqlQuery("delete from  ficha_has_inventario where IDFICHA = :idFicha")
    Void deleteFichaHasInventario(@BindBean Ficha ficha);

    @SqlQuery("delete from  ficha_has_patrono where IDFICHA = :idFicha")
    Void deleteFichaHasPatrono(@BindBean Ficha fichao);

    @SqlQuery("delete from  ficha_has_situacao where IDFICHA = :idFicha")
    Void deleteFichaHasSituacao(@BindBean Ficha ficha);

}
