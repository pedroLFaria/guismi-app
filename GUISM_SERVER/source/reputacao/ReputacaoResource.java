package reputacao;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Singleton
@Path("api/reputacao")
@Consumes(Mimes.JSON)
@Produces(Mimes.JSON)
public class ReputacaoResource {

    @Inject
    ReputacaoQueries queries;

    public Set<Reputacao> findByObject(){
        Set<Reputacao> reputacaos = queries.findByObject();
        return reputacaos;
    }
}
