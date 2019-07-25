package ficha;

import habilidade.Habilidade;
import habilidade.HabilidadeQueries;
import habilidade.HabilidadeResource;
import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("buscaFicha/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class FichaResource {

    @Inject
    FichaQueries queries;

    @Inject
    HabilidadeQueries habilidadeQueries;

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Ficha ficha = queries.findById(id);
        Set<Habilidade> habilidade =  new LinkedHashSet<>();
        habilidade.add(habilidadeQueries.findById(1L));
        ficha.setHabilidades(habilidade);
        if(ficha == null){
            return DefaultResponse.notFound().entity("Ficha não encontrada!");
        }
        return DefaultResponse.ok(ficha);
    }

}
