package gasto;

import habilidade.Habilidade;
import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("gasto/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class GastoResource {
    @Inject
    GastoQueries queries;

    public <T> Set<Gasto> findByObject(T object){
        Set<Gasto> gastos = queries.findByObject((Habilidade) object);
        return gastos;
    }
}
