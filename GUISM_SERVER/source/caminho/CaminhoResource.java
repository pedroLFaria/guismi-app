package caminho;

import kikaha.urouting.api.*;
import lombok.val;

import javax.inject.Inject;
import javax.inject.Singleton;

@Path("caminho/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class CaminhoResource {

    @Inject
    CaminhoQueries queries;

    private String mensagemPadrao = "Caminho não encontrado!";
    @GET
    @Path("ficha/{idFicha}")
    public Response findByIdFicha(@PathParam("idFicha")Long idFicha){
        val caminhos = queries.findByIdFicha(idFicha);
        if(caminhos.isEmpty())
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(caminhos);
    }

}
