package habito;

import caminho.Caminho;
import especializacao.Especializacao;
import especializacao.EspecializacaoQueries;
import ficha.Ficha;
import kikaha.urouting.api.*;
import lombok.val;
import raca.Raca;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Objects;
import java.util.Set;

@Path("api/habito/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class HabitoResource {
    @Inject
    HabitoQueries queries;

    @Inject
    EspecializacaoQueries especializacaoQueries;

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Habito> habitos = queries.findAll();
        if(habitos.isEmpty())
            return DefaultResponse.notFound().entity(habitos);
        return DefaultResponse.ok(preenche(habitos));
    }

    @GET
    @Path("caminho/{id}")
    public Response findByIdCaminho(@PathParam("id")Long id){
        Set<Habito> habitos = queries.findByIdCaminho(id);
        if(habitos.isEmpty())
            return DefaultResponse.notFound().entity(habitos);
        return DefaultResponse.ok(preenche(habitos));
    }

    public Set<Habito> findByIdCaminho(Caminho caminho){
        Set<Habito> habitos = queries.findByIdFicha(caminho.getIdCaminho());
        return preenche(habitos);
    }

    @GET
    @Path("raca/{id}")
    public Response findByIdRaca(@PathParam("id")Long id){
        Set<Habito> habitos = queries.findByIdRaca(id);
        if(habitos.isEmpty())
            return DefaultResponse.notFound().entity(habitos);
        return DefaultResponse.ok(preenche(habitos));
    }

    public Set<Habito> findByIdRaca(Raca raca){
        Set<Habito> habitos = queries.findByIdFicha(raca.getIdRaca());
        return preenche(habitos);
    }

    @GET
    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long id){
        Set<Habito> habitos = queries.findByIdFicha(id);
        if(habitos.isEmpty())
            return DefaultResponse.notFound().entity(habitos);
        return DefaultResponse.ok(preenche(habitos));
    }

    public Set<Habito> findByIdFicha(Ficha ficha){
        Set<Habito> habitos = queries.findByIdFicha(ficha.getIdFicha());
        return preenche(habitos);
    }

    private Set<Habito> preenche(Set<Habito> habitos){
        for(Habito habito : habitos){
            habito.setEspecializacoes(especializacaoQueries.findByIdHabito(habito.getIdHabito()));
        }
        return habitos;
    }
}
