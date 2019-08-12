package habito;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;
import java.util.Set;

@RunWith(KikahaRunner.class)
public class HabitoResourceTest {

    @Inject
    HabitoResource habitoResource;

    @Test
    public void testaFindAll(){
        val entityHabito = (Set<Habito>) habitoResource.findAll().entity();
        System.out.println(entityHabito);
    }

    @Test
    public void testaFindByFichaId(){
        val entityHabito = (Set<Habito>) habitoResource.findByIdFicha(1L).entity();
        System.out.println(entityHabito);
    }
}
