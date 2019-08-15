package raca;

import descendencia.DescendenciaResource;
import especializacao.EspecializacaoResource;
import ficha.Ficha;
import habilidade.HabilidadeResource;
import habito.HabitoResource;
import idioma.IdiomaResource;
import kikaha.urouting.api.*;
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

    public<T> Raca findByObject(T object){
        return queries.findByObject((Ficha) object);
    }

    public Set<Raca> findByObject(){
        return queries.findByObject();
    }
    private Raca preenche(Raca raca){
        raca.setDescendencias(descendenciaResource.findByObject(raca));
        raca.setEspecializacoes(especializacaoResource.findByObject(raca));
        raca.setHabilidades(habilidadeResource.findByObject(raca));
        raca.setHabitos(habitoResource.findByObject(raca));
        raca.setIdiomas(idiomaResource.findByObject(raca));
        raca.setPatronos(patronoResource.findByObject(raca));
        return raca;
    }
}
