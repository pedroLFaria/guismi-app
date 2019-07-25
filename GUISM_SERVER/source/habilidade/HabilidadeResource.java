package habilidade;

import acao.Acao;
import acao.AcaoQueries;
import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("api/habilidade")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class HabilidadeResource {
    @Inject
    HabilidadeQueries queries;

    @Inject
    AcaoQueries acaoQueries;
    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Habilidade habilidade = queries.findById(id);
        if(habilidade == null)
            DefaultResponse.notFound().entity("Habilidade não encontrada!");
        Set<Acao> acoes = new LinkedHashSet<>(
                acaoQueries.findByIdHabilidade(id)
        );
        habilidade.acoes = acoes;
        return DefaultResponse.ok(habilidade);
    }
}
