package descendencia;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("descendencia/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class DescendenciaResource {

    @Inject
    DescendenciaQueries queries;

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Descendencia> descendencias = new LinkedHashSet<>(queries.findAll());
        if(descendencias== null)
            return DefaultResponse.notFound().entity("Descendencias não encontradas!");
        return DefaultResponse.ok(descendencias);
    }
}
