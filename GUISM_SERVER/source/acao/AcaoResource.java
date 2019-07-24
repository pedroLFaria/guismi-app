package acao;

import kikaha.urouting.api.*;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.security.PublicKey;
import java.util.List;
import java.util.Set;

@Path("api/acao")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class AcaoResource {
    @Inject
    AcaoQueries queries;

    @POST
    public Response insertNewAcao(Acao acao) {
        long id = queries.insert(acao);
        return DefaultResponse
                .created("api/acao/" + id)
                .header("Generated-Id", String.valueOf(id));
    }

    @GET
    @Path("{id}")
    public Response findById(@PathParam("id") Long id) {
        Acao acao = queries.findByID(id);
        if (acao == null)
            return DefaultResponse.notFound().entity("Ação não encontrada!");
        return DefaultResponse.ok(acao);
    }

    @GET
    @Path("acaoHabilidade/(id)")
    public Response findByHabilidadeId(@PathParam("id") Long id){
        Set<Acao> acao = queries.findByHabilidadeId(id);
        if(acao == null)
            return DefaultResponse.notFound().entity("Ações não encontradas!");
        return DefaultResponse.ok(acao);
    }
}
