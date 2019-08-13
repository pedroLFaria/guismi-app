package raca;

import ficha.Ficha;
import kikaha.core.test.KikahaRunner;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

@RunWith(KikahaRunner.class)
public class RacaResourceTest {
    @Inject
    RacaResource racaResource;

    @Test
    public void testa(){
        Ficha ficha = new Ficha();
        ficha.setIdFicha(1L);
        System.out.println(racaResource.findByObject(ficha));
    }
}
