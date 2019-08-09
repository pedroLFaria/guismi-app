package inventario;

import kikaha.urouting.api.DefaultResponse;
import kikaha.urouting.api.Path;
import kikaha.urouting.api.PathParam;
import kikaha.urouting.api.Response;
import lombok.val;

import javax.inject.Inject;
import java.util.Set;

@Path("inventario/")
public class InventarioResource {

    @Inject
    InventarioQueries queries;

    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long id){
        val inventarios = queries.findByIdFicha(id);
        if(inventarios.isEmpty())
            return DefaultResponse.notFound().entity(inventarios);
        return DefaultResponse.ok(inventarios);
    }
}
