package sanidade;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Singleton
@Path("api/sanidade")
@Consumes(Mimes.JSON)
@Produces(Mimes.JSON)
public class SanidadeResource {

    @Inject
    SanidadeQueries queries;

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Sanidade> sanidades = queries.findAll();
        if(sanidades.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma sanidade encontrada!");
        return DefaultResponse.ok(sanidades);
    }

}
