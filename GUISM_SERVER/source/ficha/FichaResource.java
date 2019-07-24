package ficha;

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

        return DefaultResponse.ok(ficha);
    }

    /*@GET
    @Path("{id}")
    public Response findFichaBYJogadorId(@PathParam("id") Long id){
        Ficha ficha = queries.findFichaBYJogadorId(id);

        return DefaultResponse.ok(ficha);
    }*/
}
