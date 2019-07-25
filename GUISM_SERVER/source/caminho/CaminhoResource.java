package caminho;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;

@Path("api/caminho")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class CaminhoResource {

    @Inject
    CaminhoQueries queries;

}
