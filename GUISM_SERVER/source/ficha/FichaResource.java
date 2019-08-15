package ficha;

import caminho.Caminho;
import caminho.CaminhoResource;
import descendencia.Descendencia;
import descendencia.DescendenciaResource;
import habilidade.Habilidade;
import habilidade.HabilidadeResource;
import habito.Habito;
import habito.HabitoResource;
import idioma.Idioma;
import idioma.IdiomaResource;
import inventario.InventarioQueries;
import kikaha.urouting.api.*;
import patrono.Patrono;
import patrono.PatronoResource;
import raca.Raca;
import raca.RacaResource;
import situacao.Situacao;
import situacao.SituacaoResource;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Path("api/ficha/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class FichaResource {

    @Inject
    FichaQueries queries;

    @Inject
    RacaResource racaResource;

    @Inject
    CaminhoResource caminhoResource;

    @Inject
    DescendenciaResource descendenciaResource;

    @Inject
    HabilidadeResource habilidadeResource;

    @Inject
    HabitoResource habitoResource;

    @Inject
    IdiomaResource idiomaResource;

    @Inject
    InventarioQueries inventarioQueries;

    @Inject
    private PatronoResource patronoResource;

    @Inject
    SituacaoResource situacaoResource;

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Ficha ficha = queries.findById(id);
        if(ficha == null){
            return DefaultResponse.notFound().entity("Ficha não encontrada!");
        }
        return DefaultResponse.ok(preenche(ficha));
    }

    private Ficha preenche(Ficha ficha){
        ficha.setRaca(racaResource.findByObject(ficha));
        ficha.setHabilidades(habilidadeResource.findByObject(ficha));
        ficha.setCaminhos(caminhoResource.findByObject(ficha));
        ficha.setIdiomas(idiomaResource.findByObject(ficha));
        ficha.setPatronos(patronoResource.findByObject(ficha));
        ficha.setSituacoes(situacaoResource.findByObject(ficha));
        ficha.setDescendencias((Set<Descendencia>) descendenciaResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setHabitos((Set<Habito>) habitoResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setInventarios(inventarioQueries.findByIdFichaPreenchido(ficha.getIdFicha()));
        return ficha;
    }

    @POST
    @Path("update/{id}")
    public Response update(Ficha ficha) {
        queries.update(ficha);
        queries.cleanFichaJunctionTables(ficha);
        insertFichaJunctionTables(ficha);
        return DefaultResponse.accepted();
    }

    private void insertFichaJunctionTables(Ficha ficha){
        for(Habito habito : ficha.getHabitos()){
            queries.insertFichaHasHabito(ficha,habito);
        }
        for(Habilidade habilidade : ficha.getHabilidades()){
            queries.insertFichaHasHabilidade(ficha,habilidade);
        }
        for(Caminho caminho : ficha.getCaminhos()){
            queries.insertFichaHasCaminho(ficha,caminho);
        }
        for(Descendencia descendencia : ficha.getDescendencias()){
            queries.insertFichaHasDescendencia(ficha,descendencia);
        }
        /*for(Idioma idioma : ficha.getIdiomas()){
            queries.insertFichaHasIdidoma(ficha,idioma);
        }
        for(Inventario inventario : ficha.getInventarios()){
            queries.insertFichaHasInventario(ficha,inventario);
        }
        for(Patrono patrono : ficha.getPatronos()){
            queries.insertFichaHasPatrono(ficha,patrono);
        }
        for(Situacao situacao : ficha.getSituacoes()){
            queries.insertFichaHasSituacao(ficha,situacao);
        }*/
    }
}
