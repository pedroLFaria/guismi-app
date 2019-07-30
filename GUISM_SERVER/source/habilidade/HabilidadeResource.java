package habilidade;

import acao.Acao;
import acao.AcaoResource;
import gasto.Gasto;
import gasto.GastoResource;
import kikaha.urouting.api.*;
import situacao.Situacao;
import situacao.SituacaoResource;

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
    AcaoResource acaoResource;

    @Inject
    GastoResource gastoResource;

    @Inject
    SituacaoResource situacaoResource;

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
        Set<Acao> acoes = new LinkedHashSet<>((Set<Acao>) acaoResource.findByIdHabilidade(id).entity());
        Set<Gasto> gastos = new LinkedHashSet<>((Set<Gasto>)  gastoResource.findByIdHabilidade(id).entity());
        Set<Situacao> situacoes = new LinkedHashSet<>((Set<Situacao>)situacaoResource.findByIdHabilidade(id).entity());
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

    @GET
    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long id){
        Set<Habilidade> habilidades = queries.findByIdFicha(id);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity("Nenhuma habilidade encontrada");
        return DefaultResponse.ok(preencheHabilidade(habilidades));
    }

    private Set<Habilidade> preencheHabilidade(Set<Habilidade> habilidades){
        for(Habilidade habilidade : habilidades){
            Set<Acao> acoes = new LinkedHashSet<>((Set<Acao>) acaoResource.findByIdHabilidade(habilidade.getIdHabilidade()).entity());
            Set<Gasto> gastos = new LinkedHashSet<>((Set<Gasto>)  gastoResource.findByIdHabilidade(habilidade.getIdHabilidade()).entity());
            Set<Situacao> situacoes = new LinkedHashSet<>((Set<Situacao>)situacaoResource.findByIdHabilidade(habilidade.getIdHabilidade()).entity());
            habilidade.setSituacoes(situacoes);
            habilidade.setAcoes(acoes);
            habilidade.setGasto(gastos);
        }
        return habilidades;
    }
}
