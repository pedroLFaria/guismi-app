package ficha;

import habilidade.Habilidade;
import habito.Habito;
import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;
import java.util.LinkedHashSet;
import java.util.Set;

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

    @Test
    public void updateFicha(){
        val ficha = (Ficha) fichaResource.findById(1L).entity();
        ficha.setNomePersonagem("Lincom");
        System.out.println(ficha.getDescendencias());
        fichaResource.update(ficha);
    }
}
