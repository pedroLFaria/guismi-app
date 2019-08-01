package ficha;

import caminho.Caminho;
import caminho.CaminhoResource;
import descendencia.Descendencia;
import descendencia.DescendenciaResource;
import habilidade.Habilidade;
import habilidade.HabilidadeQueries;
import habilidade.HabilidadeResource;
import habitos.Habito;
import habitos.HabitoResource;
import idiomas.Idioma;
import idiomas.IdiomaResource;
import inventario.InventarioResource;
import kikaha.urouting.api.*;
import patrono.Patrono;
import patrono.PatronoResource;
import raca.Raca;
import raca.RacaResource;
import situacao.Situacao;
import situacao.SituacaoResource;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
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
    InventarioResource inventarioResource;

    @Inject
    PatronoResource patronoResource;

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
        ficha.setRaca((Raca)racaResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setHabilidades((Set<Habilidade>) habilidadeResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setCaminhos((Set<Caminho>) caminhoResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setIdiomas((Set<Idioma>) idiomaResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setPatronos((Set<Patrono>) patronoResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setSituacoes((Set<Situacao>)situacaoResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setDescendencias((Set<Descendencia>) descendenciaResource.findByIdFicha(ficha.getIdFicha()).entity());
        ficha.setHabitos((Set<Habito>) habitoResource.findByIdFicha(ficha.getIdFicha()).entity());
        return ficha;
    }
}
