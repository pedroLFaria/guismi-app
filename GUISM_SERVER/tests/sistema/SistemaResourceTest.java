package sistema;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

@RunWith(KikahaRunner.class)
public class SistemaResourceTest {
    @Inject SistemaResource resource;

    @Test
    public void testFindSistema(){
        val getResponse = resource.findSistema();
        val entitySistema = (Sistema)getResponse.entity();
        System.out.println(entitySistema);
    }
}
