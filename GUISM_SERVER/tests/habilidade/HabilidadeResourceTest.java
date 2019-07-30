package habilidade;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;
import java.util.Random;
import java.util.Set;

@RunWith(KikahaRunner.class)
public class HabilidadeResourceTest {

    @Inject HabilidadeResource habilidadeResource;

    @Test
    public void  findAll(){
        val getResponse = habilidadeResource.findAll();
        val entityHabilidades = (Set<Habilidade>)getResponse.entity();
        System.out.println(entityHabilidades);
        Assert.assertFalse(entityHabilidades.isEmpty());
    }

    @Test
    public void findHabilidadeById(){
        val getResponse = habilidadeResource.findById(1l);
        val entityHabilidade = (Habilidade)getResponse.entity();
        System.out.println(entityHabilidade);
    }

    @Test
    public void random() {
        Random r = new Random();
        System.out.println(r.nextInt(7) + 1);
    }
}
