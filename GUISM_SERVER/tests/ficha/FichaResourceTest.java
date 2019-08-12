package ficha;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

@RunWith(KikahaRunner.class)
public class FichaResourceTest {

    @Inject FichaResource fichaResource;

    @Test
    public void getFichaByID(){
        val getResponse = fichaResource.findById(1l);
        val entityFicha = (Ficha) getResponse.entity();
        assert entityFicha != null;
        assert entityFicha.idJogador ==1L;
    }
}
