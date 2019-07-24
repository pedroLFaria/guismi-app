package habilidade;

import kikaha.urouting.api.*;
import org.jdbi.v3.sqlobject.customizer.Bind;

import javax.inject.Inject;
import javax.inject.Singleton;

@Path("api/habilidade")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class HabilidadeResource {
    @Inject
    HabilidadeQueries queries;

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Habilidade habilidade = queries.findById(id);
        if(habilidade == null)
            DefaultResponse.notFound().entity("Habilidade não encontrada!");
        return DefaultResponse.ok(habilidade);
    }
}
