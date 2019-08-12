package raca;

import descendencia.Descendencia;
import descendencia.DescendenciaResource;
import especializacao.Especializacao;
import especializacao.EspecializacaoResource;
import habilidade.Habilidade;
import habilidade.HabilidadeResource;
import habito.Habito;
import habito.HabitoResource;
import idioma.Idioma;
import idioma.IdiomaResource;
import kikaha.urouting.api.*;
import patrono.Patrono;
import patrono.PatronoResource;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Singleton
@Path("api/raca/")
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class RacaResource {

    @Inject
    RacaQueries queries;

    @Inject
    DescendenciaResource descendenciaResource;

    @Inject
    EspecializacaoResource especializacaoResource;

    @Inject
    HabilidadeResource habilidadeResource;

    @Inject
    HabitoResource habitoResource;

    @Inject
    IdiomaResource idiomaResource;

    @Inject
    PatronoResource patronoResource;

    @GET
    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long id){
        Raca raca = queries.findByIdFicha(id);
        if(raca == null)
            return DefaultResponse.notFound().entity("Raça não encontrada!");
        return DefaultResponse.ok(preenche(raca));
    }

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Raca> racas = queries.findAll();
        if(racas.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma raça encontrada!");
        return DefaultResponse.ok(racas);
    }

    private Raca preenche(Raca raca){
        raca.setDescendencias((Set<Descendencia>)descendenciaResource.findByIdRaca(raca.getIdRaca()).entity());
        raca.setEspecializacoes((Set<Especializacao>) especializacaoResource.findByIdRaca(raca.getIdRaca()).entity());
        raca.setHabilidades((Set<Habilidade>) habilidadeResource.findByIdRacas(raca.getIdRaca()).entity());
        raca.setHabitos((Set<Habito>) habitoResource.findByIdRaca(raca.getIdRaca()).entity());
        raca.setIdiomas((Set<Idioma>) idiomaResource.findByIdRaca(raca.getIdRaca()).entity());
        raca.setPatronos((Set<Patrono>) patronoResource.findByIdRaca(raca.getIdRaca()).entity());
        return raca;
    }
}
