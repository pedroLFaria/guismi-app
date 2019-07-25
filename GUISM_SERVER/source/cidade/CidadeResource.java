package cidade;

import kikaha.urouting.api.DefaultResponse;
import kikaha.urouting.api.GET;
import kikaha.urouting.api.Path;
import kikaha.urouting.api.Response;

import javax.inject.Inject;
import java.util.Set;

@Path("cidade/")
public class CidadeResource {
    @Inject
    CidadeQueries queries;

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Cidade> cidades = queries.findAll();
        if(cidades == null)
            return DefaultResponse.notFound().entity("Cidades não encontradas");
        return DefaultResponse.ok(cidades);
    }
}
