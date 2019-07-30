package gasto;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;
import java.util.Set;

@RunWith(KikahaRunner.class)
public class GastoResourceTest {

    @Inject
    GastoResource gastoResource;

    @Test
    public void findGastoByHabilidadeId(){
        val getResponse = gastoResource.findByIdHabilidade(1L);
        val entityGasto = (Set<Gasto>) getResponse.entity();
        System.out.println(entityGasto);
    }
}
