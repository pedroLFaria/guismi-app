package caminho;

import especializacao.Especializacao;
import especializacao.EspecializacaoQueries;
import especializacao.EspecializacaoResource;
import habilidade.Habilidade;
import habilidade.HabilidadeResource;
import habitos.Habito;
import habitos.HabitoQueries;
import habitos.HabitoResource;
import kikaha.urouting.api.*;
import lombok.val;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.LinkedHashSet;
import java.util.Set;

@Path("caminho/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class CaminhoResource {

    @Inject
    CaminhoQueries queries;

    @Inject
    HabilidadeResource habilidadeResource;

    @Inject
    EspecializacaoResource especializacaoResource;

    @Inject
    HabitoResource habitoResource;

    private String mensagemPadrao = "Caminho não encontrado!";
    @GET
    @Path("ficha/{idFicha}")
    public Response findByIdFicha(@PathParam("idFicha")Long idFicha){
        val caminhos = queries.findByIdFicha(idFicha);
        if(caminhos.isEmpty())
            return DefaultResponse.notFound().entity(mensagemPadrao);
        return DefaultResponse.ok(caminhos);
    }

    private Set<Caminho> preenche(Set<Caminho> caminhos){
        for(Caminho caminho : caminhos){
            Set<Especializacao> especializacaos = new LinkedHashSet<>();
            Set<Habito> habitos = new LinkedHashSet<>(habitoQueries.findByIdCaminho(caminho.idCaminho));
            Set<Habilidade> habilidades = new LinkedHashSet<>(habilidadeResource);
            caminho.setEspecializacoes();
            caminho.setHabilidades();
            caminho.setHabitos();
        }
    }
}
