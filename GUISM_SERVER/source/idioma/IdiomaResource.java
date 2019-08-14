package idioma;

import ficha.Ficha;
import kikaha.urouting.api.*;
import raca.Raca;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
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
            return DefaultResponse.notFound().entity("Nenhum idioma encontrado!");
        return DefaultResponse.ok(idiomas);
    }

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Idioma> idiomas = queries.findAll();
        if(idiomas.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum idioma encontrado!");
        return DefaultResponse.ok(idiomas);
    }

    @GET
    @Path("raca/{id}")
    public Response findByIdRaca(@PathParam("id")Long id){
        Set<Idioma> idiomas = queries.findByIdRaca(id);
        if(idiomas.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum idioma encontrado!");
        return DefaultResponse.ok(idiomas);
    }

    public <T> Set<Idioma> findByObject(T object){
        Set<Idioma> idiomas = new LinkedHashSet<>();
        switch (idiomas.getClass().getName()){
            case "raca.Raca":
                idiomas = queries.findByObject((Raca) object);
                break;
            case "ficha.Ficha":
                idiomas = queries.findByObject((Ficha) object);
                break;
        }
        return idiomas;
    }
    public Set<Idioma> findByObject(){
        return queries.findByObject();
    }
}
