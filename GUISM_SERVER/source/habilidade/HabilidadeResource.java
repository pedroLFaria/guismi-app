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

@Path("habilidade/")
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
    @Path("sistema")
    public  Response findAll(){
        Set<Habilidade> habilidades = queries.findAll();
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma habilidade registrada");
        return DefaultResponse.ok(preencheHabilidade(habilidades));
    }

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

    @GET
    @Path("raca/{idRaca}")
    public Response findByIdRacas(@PathParam("idRaca")Long idRaca){
        Set<Habilidade> habilidades = queries.findByIdRacas(idRaca);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma habilidade encontrada");
        return DefaultResponse.ok(preencheHabilidade(habilidades));
    }

    @GET
    @Path("caminho/{idCaminho}")
    public Response findByIdCaminho(@PathParam("idCaminho")Long idCaminho){
        Set<Habilidade> habilidades = queries.findByIdCaminho(idCaminho);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma habilidade encontrada");
        return DefaultResponse.ok(preencheHabilidade(habilidades));
    }

    @GET
    @Path("descendencia/{idDescendencia}")
    public Response findByIdDescendencia(@PathParam("idDescendencia")Long idDescendencia){
        Set<Habilidade> habilidades = queries.findByIdDescendencia(idDescendencia);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma habilidade encontrada");
        return DefaultResponse.ok(preencheHabilidade(habilidades));
    }

    private Set<Habilidade> preencheHabilidade(Set<Habilidade> habilidades){
        for(Habilidade habilidade : habilidades){
            Set<Acao> acoes = new LinkedHashSet<>(acaoQueries.findByIdHabilidade(habilidade.getIdHabilidade()));
            Set<Gasto> gastos = new LinkedHashSet<>(gastoQueries.findByHabilidadeId(habilidade.getIdHabilidade()));
            Set<Situacao> situacoes = new LinkedHashSet<>(situacaoQueries.findByIdHabilidade(habilidade.getIdHabilidade()));
            habilidade.setSituacoes(situacoes);
            habilidade.setAcoes(acoes);
            habilidade.setGasto(gastos);
        }
        return habilidades;
    }
}
