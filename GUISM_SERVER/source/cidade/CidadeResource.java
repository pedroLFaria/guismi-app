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


    public Set<Cidade> findByObject(){
        return queries.findByObject();
    }
}
