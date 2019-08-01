package patrono;

import kikaha.urouting.api.*;
import org.jdbi.v3.sqlobject.customizer.Bind;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Path("api/patrono/")
@Singleton
@Consumes(Mimes.JSON)
@Produces(Mimes.JSON)
public class PatronoResource {

    @Inject
    PatronoQueries queries;

    @GET
    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long id){
        Set<Patrono> patronos = queries.findByIdFicha(id);
        if(patronos.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum patrono encontrado");
        return DefaultResponse.ok(patronos);
    }

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Patrono> patronos = queries.findAll();
        if (patronos.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum patrono encontrado!");
        return DefaultResponse.ok(patronos);
    }

    @GET
    @Path("raca/{id}")
    public Response findByIdRaca(@Bind("id")Long id){
        Set<Patrono> patronos = queries.findByIdRaca(id);
        if(patronos.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum patrono encontrado!");
        return DefaultResponse.ok(patronos);
    }
}
