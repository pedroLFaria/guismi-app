package item;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Singleton
@Path("api/item")
@Consumes(Mimes.JSON)
@Produces(Mimes.JSON)
public class ItemResource {

    @Inject
    ItemQueries queries;

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Item> itens = queries.findAll();
        if (itens.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum item encontrado!");
        return DefaultResponse.ok(itens);
    }
}
