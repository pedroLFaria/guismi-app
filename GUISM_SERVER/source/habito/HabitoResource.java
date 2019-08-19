package habito;

import caminho.Caminho;
import descendencia.Descendencia;
import especializacao.Especializacao;
import especializacao.EspecializacaoQueries;
import especializacao.EspecializacaoResource;
import ficha.Ficha;
import kikaha.urouting.api.*;
import lombok.val;
import raca.Raca;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Path("api/habito/")
@Singleton
@Produces(Mimes.JSON)
@Consumes(Mimes.JSON)
public class HabitoResource {
    @Inject
    private HabitoQueries queries;

    @Inject
    private EspecializacaoResource especializacaoResource;

    public <T>Set<Habito> findByObject(T object) throws NoClassDefFoundError{
        switch (object.getClass().getName()) {
            case "descendencia.Descendencia":
                return preenche(queries.findByObject((Descendencia) object));
            case "caminho.Caminho":
                return preenche(queries.findByObject((Caminho) object));
            case "raca.Raca":
                return preenche(queries.findByObject((Raca) object));
            case "ficha.Ficha":
                return preenche(queries.findByObject((Ficha) object));
            default:
                throw new NoClassDefFoundError("Classe não definida no método.");
        }
    }
    public Set<Habito> findByObject(){
        return preenche(queries.findByObject());
    }
    private Set<Habito> preenche(Set<Habito> habitos){
        for(Habito habito : habitos){
            habito.setEspecializacoes(especializacaoResource.findByObject(habito));
        }
        return habitos;
    }
}
