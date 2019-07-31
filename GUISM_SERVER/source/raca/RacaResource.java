package raca;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Singleton
@Path("api/raca")
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class RacaResource {

    @Inject
    RacaQueries queries;

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Raca> racas = queries.findAll();
        if(racas.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma raça encontrada!");
        return DefaultResponse.ok(racas);
    }
}
