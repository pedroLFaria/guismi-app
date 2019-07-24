package ficha;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

@RunWith(KikahaRunner.class)
public class fichaResourceTest {

    @Inject FichaResource fichaResource;

    @Test
    public void getFichaByID(){
        val getResponse = fichaResource.findById(1l);
        val entity = getResponse.entity();
        System.out.println(entity);
    }
}
