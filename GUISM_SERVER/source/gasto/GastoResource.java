package gasto;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("gasto/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class GastoResource {
    @Inject
    GastoQueries queries;

    @GET
    @Path("{id}")
    public Response findByIdHabilidade(@PathParam("id")Long id){
        Set<Gasto> gastos = new LinkedHashSet<>(queries.findByHabilidadeId(id));
        if(gastos.isEmpty())
            return DefaultResponse.notFound().entity(gastos);
        return DefaultResponse.ok(gastos);
    }
}
