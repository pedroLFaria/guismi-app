package sistema;

import caminho.Caminho;
import caminho.CaminhoResource;
import cidade.Cidade;
import cidade.CidadeResource;
import descendencia.Descendencia;
import descendencia.DescendenciaResource;
import habilidade.Habilidade;
import habilidade.HabilidadeResource;
import habito.Habito;
import habito.HabitoResource;
import idioma.Idioma;
import idioma.IdiomaResource;
import kikaha.urouting.api.*;
import patrono.Patrono;
import patrono.PatronoResource;
import raca.Raca;
import raca.RacaResource;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Set;

@Singleton
@Path("api/sistema")
@Consumes(Mimes.JSON)
@Produces(Mimes.JSON)
public class SistemaResource {

    @Inject
    RacaResource racaResource;

    @Inject
    CaminhoResource caminhoResource;

    @Inject
    CidadeResource cidadeResource;

    @Inject
    DescendenciaResource descendenciaResource;

    @Inject
    HabilidadeResource habilidadeResource;

    @Inject
    HabitoResource habitoResource;

    @Inject
    IdiomaResource idiomaResource;

    @Inject
    PatronoResource patronoResource;

    @GET
    @Path("")
    public Response findSistema(){
        Sistema sistema = new Sistema();
        sistema.setCaminhos((Set<Caminho>) caminhoResource.findAll().entity());
        sistema.setCidades((Set<Cidade>) cidadeResource.findAll().entity());
        sistema.setDescendencias((Set<Descendencia>) descendenciaResource.findAll().entity());
        sistema.setHabilidades((Set<Habilidade>) habilidadeResource.findAll().entity());
        sistema.setHabitos((Set<Habito>) habitoResource.findAll().entity());
        sistema.setIdiomas((Set<Idioma>) idiomaResource.findAll().entity());
        sistema.setPatronos((Set<Patrono>) patronoResource.findAll().entity());
        sistema.setRacas((Set<Raca>) racaResource.findAll().entity());
        return DefaultResponse.ok(sistema);
    }

}
