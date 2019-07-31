package habitos;

import especializacao.Especializacao;
import especializacao.EspecializacaoQueries;
import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
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
    @Path("caminho/{id}")
    public Response findByIdCaminho(@PathParam("id")Long id){
        Set<Habito> habitos = queries.findByIdCaminho(id);
        if(habitos.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum habito encontrado!");
        return DefaultResponse.ok(preenche(habitos));
    }

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Habito> habitos = queries.findAll();
        if(habitos.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum habito encontrado!");
        return DefaultResponse.ok(preenche(habitos));
    }

    private Set<Habito> preenche(Set<Habito> habitos){
        for(Habito habito : habitos){
            Set<Especializacao> especializacaos = especializacaoQueries.findByIdHabito(habito.getIdHabito());
            habito.setEspecializacoes(especializacaos);
        }
        return habitos;
    }
}
