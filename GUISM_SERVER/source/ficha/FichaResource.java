package ficha;

import habilidade.Habilidade;
import habilidade.HabilidadeQueries;
import habilidade.HabilidadeResource;
import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("Ficha/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class FichaResource {

    @Inject
    FichaQueries queries;

    @Inject
    HabilidadeResource habilidadeResource;

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Ficha ficha = queries.findById(id);
        Set<Habilidade> habilidade =  new LinkedHashSet<>();
        habilidade.add((Habilidade) habilidadeResource.findById(1L).entity());
        ficha.setHabilidades(habilidade);
        if(ficha == null){
            return DefaultResponse.notFound().entity("Ficha não encontrada!");
        }
        return DefaultResponse.ok(ficha);
    }

}
