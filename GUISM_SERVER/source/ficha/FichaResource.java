package ficha;

import habilidade.Habilidade;
import habilidade.HabilidadeQueries;
import habilidade.HabilidadeResource;
import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;

@Path("buscaFicha/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class FichaResource {

    @Inject
    FichaQueries queries;

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Ficha ficha = queries.findById(id);
        if(ficha == null){
            return DefaultResponse.notFound().entity("Ficha não encontrada!");
        }
        return DefaultResponse.ok(ficha);
    }

}
