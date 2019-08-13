package habilidade;

import acao.Acao;
import acao.AcaoResource;
import caminho.Caminho;
import descendencia.Descendencia;
import ficha.Ficha;
import gasto.Gasto;
import gasto.GastoResource;
import kikaha.urouting.api.*;
import raca.Raca;
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
            return DefaultResponse.notFound().entity(habilidades);
        return DefaultResponse.ok(preenche(habilidades));
    }

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id){
        Habilidade habilidade = queries.findById(id);
        if(habilidade == null)
           return DefaultResponse.notFound().entity("Nenhuma habilidade encontrada!");
        Set<Acao> acoes = new LinkedHashSet<>((Set<Acao>) acaoResource.findByIdHabilidade(id).entity());
        Set<Gasto> gastos = new LinkedHashSet<>((Set<Gasto>)  gastoResource.findByIdHabilidade(id).entity());
        Set<Situacao> situacoes = new LinkedHashSet<>((Set<Situacao>)situacaoResource.findByIdHabilidade(id).entity());
        habilidade.setSituacoes(situacoes);
        habilidade.setAcoes(acoes);
        habilidade.setGasto(gastos);
        return DefaultResponse.ok(habilidade);
    }

    @GET
    @Path("raca/{id}")
    public Response findByIdRacas(@PathParam("id")Long idRaca){
        Set<Habilidade> habilidades = queries.findByIdRacas(idRaca);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity(habilidades);
        return DefaultResponse.ok(preenche(habilidades));
    }

    @GET
    @Path("caminho/{id}")
    public Response findByIdCaminho(@PathParam("id")Long idCaminho){
        Set<Habilidade> habilidades = queries.findByIdCaminho(idCaminho);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity(habilidades);
        return DefaultResponse.ok(preenche(habilidades));
    }

    @GET
    @Path("descendencia/{id}")
    public Response findByIdDescendencia(@PathParam("id")Long idDescendencia){
        Set<Habilidade> habilidades = queries.findByIdDescendencia(idDescendencia);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity(habilidades);
        return DefaultResponse.ok(preenche(habilidades));
    }

    @GET
    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long id){
        Set<Habilidade> habilidades = queries.findByIdFicha(id);
        if(habilidades.isEmpty())
            return DefaultResponse.notFound().entity(habilidades);
        return DefaultResponse.ok(preenche(habilidades));
    }

    public <T> Set<Habilidade> findByObject(T object){
        Set<Habilidade> habilidades = new LinkedHashSet<>();
        switch (object.getClass().getName()){
            case "raca.Raca":
                habilidades = queries.findByIdObject((Raca) object);
                break;
            case "caminho.Caminho":
                habilidades = queries.findByIdObject((Caminho) object);
                break;
            case "descendencia.Descendencia":
                habilidades = queries.findByIdObject((Descendencia) object);
                break;
            case"ficha.Ficha":
                habilidades = queries.findByIdObject((Ficha) object);
                break;
        }
        return preenche(habilidades);
    }

    private Set<Habilidade> preenche(Set<Habilidade> habilidades){
        for(Habilidade habilidade : habilidades){
            Set<Gasto> gastos = new LinkedHashSet<>((Set<Gasto>)  gastoResource.findByIdHabilidade(habilidade.getIdHabilidade()).entity());
            Set<Situacao> situacoes = new LinkedHashSet<>((Set<Situacao>)situacaoResource.findByIdHabilidade(habilidade.getIdHabilidade()).entity());
            habilidade.setAcoes(acaoResource.findByObject(habilidade));
            habilidade.setSituacoes(situacoes);
            habilidade.setGasto(gastos);
        }
        return habilidades;
    }
}
