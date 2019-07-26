package habilidade;

import acao.Acao;
import acao.AcaoQueries;
import gasto.Gasto;
import gasto.GastoQueries;
import kikaha.urouting.api.*;
import situacao.Situacao;
import situacao.SituacaoQueries;

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

    @Inject
    GastoQueries gastoQueries;

    @Inject
    SituacaoQueries situacaoQueries;

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Habilidade habilidade = queries.findById(id);
        if(habilidade == null)
            DefaultResponse.notFound().entity("Habilidade não encontrada!");
        Set<Acao> acoes = new LinkedHashSet<>(acaoQueries.findByIdHabilidade(id));
        Set<Gasto> gastos = new LinkedHashSet<>(gastoQueries.findByHabilidadeId(id));
        Set<Situacao> situacoes = new LinkedHashSet<>(situacaoQueries.findByIdHabilidade(id));
        habilidade.setSituacoes(situacoes);
        habilidade.setAcoes(acoes);
        habilidade.setGasto(gastos);
        return DefaultResponse.ok(habilidade);
    }
}
