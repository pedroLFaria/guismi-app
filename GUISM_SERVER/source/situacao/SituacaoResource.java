package situacao;

import ficha.Ficha;
import habilidade.Habilidade;
import kikaha.urouting.api.*;
import lombok.val;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("api/Situacao/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class SituacaoResource {

    private String mensagemPadrao = "Situação não encontrada!";

    @Inject
    SituacaoQueries queries;

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id")Long id){
        val situacao = queries.findById(id);
        if(situacao==null)
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(situacao);
    }

    @GET
    @Path("ficha/{idFicha}")
    public Response findByIdFicha(@PathParam("idFicha")Long id){
        val situacoes = queries.findByIdFicha(id);
        if(situacoes == null)
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(situacoes);
    }

    @GET
    @Path("habilidade/{idHabilidade}")
    public Response findByIdHabilidade(@PathParam("idHabilidade")Long id){
        val situacoes = queries.findByIdHabilidade(id);
        if(situacoes == null)
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(situacoes);
    }

    public <T> Set<Situacao> findByObject(T object){
        Set<Situacao> situacaos = new LinkedHashSet<>();
        switch (object.getClass().getName()){
            case "ficha.Ficha":
                situacaos = queries.findByObject((Ficha) object);
                break;
            case "habilidade.Habilidade":
                situacaos = queries.findByObject((Habilidade) object);
                break;
        }
        return situacaos;
    }

}
