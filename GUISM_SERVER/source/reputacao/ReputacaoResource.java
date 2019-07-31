package reputacao;

import kikaha.urouting.api.*;
import sistema.Sistema;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Singleton
@Path("api/reputacao")
@Consumes(Mimes.JSON)
@Produces(Mimes.JSON)
public class ReputacaoResource {

    @Inject
    ReputacaoQueries queries;

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Reputacao> reputacaos = queries.findAll();
        if(reputacaos.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma reputação encontrada!");
        return DefaultResponse.ok(reputacaos);
    }
}
