package carros;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;

@Path("api/carros")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class CarrosResource {

    @Inject CarroQueries queries;

    @POST
    public Response insertNewCar(Carro carro){
        long id = queries.insert( carro );
        return DefaultResponse
                .created( "/api/carros/" + id )
                .header( "Generated-Id", String.valueOf(id) );
    }

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Carro carro = queries.findById( id );
        if ( carro == null )
            return DefaultResponse.notFound().entity( "Carro não encontrado!" );
        return DefaultResponse.ok( carro );
    }

}
