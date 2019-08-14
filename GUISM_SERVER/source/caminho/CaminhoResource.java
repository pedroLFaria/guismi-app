package caminho;

import especializacao.Especializacao;
import especializacao.EspecializacaoResource;
import ficha.Ficha;
import habilidade.Habilidade;
import habilidade.HabilidadeResource;
import habito.Habito;
import habito.HabitoResource;
import kikaha.urouting.api.*;
import lombok.val;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.lang.invoke.SwitchPoint;
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

    @GET
    @Path("ficha/{id}")
    public Response findByIdFicha(@PathParam("id")Long idFicha){
        val caminhos = queries.findByIdFicha(idFicha);
        if(caminhos.isEmpty())
            return DefaultResponse.notFound().entity(caminhos);
        return DefaultResponse.ok(preenche(caminhos));
    }

    @GET
    @Path("sistema")
    public Response findAll(){
        Set<Caminho> caminhos = queries.findAll();
        if(caminhos.isEmpty())
            return DefaultResponse.notFound().entity("Nenhum caminho encontrado!");
        return DefaultResponse.ok(preenche(caminhos));
    }

    public <T> Set<Caminho> findByObject(T object){
        Set<Caminho> caminhos = new LinkedHashSet<>();
        switch (object.getClass().getName()){
            case "fica.Ficha":
                caminhos = queries.findByObject((Ficha) object);
                break;
        }
        return preenche(caminhos);
    }


    private Set<Caminho> preenche(Set<Caminho> caminhos){
        for(Caminho caminho : caminhos){
            Set<Especializacao> especializacaos = new LinkedHashSet<>();
            Set<Habito> habitos = new LinkedHashSet<>((Set<Habito>)habitoResource.findByIdCaminho(caminho.getIdCaminho()).entity());
            caminho.setEspecializacoes(especializacaos);
            caminho.setHabilidades(habilidadeResource.findByObject(caminho));
            caminho.setHabitos(habitos);
        }
        return caminhos;
    }
}
