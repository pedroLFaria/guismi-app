package idiomas;

import kikaha.urouting.api.*;
import lombok.val;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Path("api/idioma/")
@Singleton
@Consumes(Mimes.JSON)
@Produces(Mimes.JSON)
public class IdiomaResource {

    @Inject
    IdiomaQueries queries;

    @GET
    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long idFicha){
        Set<Idioma> idiomas = queries.findByIdFicha(idFicha);
        if(idiomas.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum idiomas encontrado!");
        return DefaultResponse.ok(idiomas);
    }

}
