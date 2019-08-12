package especializacao;

import kikaha.urouting.api.*;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Path("especializacao/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class EspecializacaoResource {

    @Inject
    EspecializacaoQueries queries;

    String mensagemPadrao = "Especializações não encontradas!";

    @GET
    @Path("sistema")
    public  Response findAll(){
        Set<Especializacao> especializacoes = queries.findAll();
        if(especializacoes == null)
            return DefaultResponse.notFound().encoding(mensagemPadrao);
        return DefaultResponse.ok(especializacoes);
    }

    @GET
    @Path("ficha/{id}")
    public Response findEspecializacaoByIdFicha(@PathParam("id")Long id){
        Set<Especializacao> especializacoes = queries.findEspecializacaoByIdFicha(id);
        if(especializacoes == null)
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(especializacoes);
    }

    @GET
    @Path("raca/{id}")
    public Response findByIdRaca(@PathParam("id")Long id){
        Set<Especializacao> especializacoes = queries.findByIdRaca(id);
        if(especializacoes == null)
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(especializacoes);
    }

    @GET
    @Path("habito/{id}")
    public Response findByIdHabito(@PathParam("id")Long id){
        Set<Especializacao> especializacoes = queries.findByIdHabito(id);
        if (especializacoes == null)
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(especializacoes);
    }


}
