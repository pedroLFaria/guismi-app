package habilidade;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

@RunWith(KikahaRunner.class)
public class habilidadeResourceTest {

    @Inject HabilidadeResource habilidadeResource;

    @Test
    public void findHabilidadeById(){
        val getResponse = habilidadeResource.findById(1l);
        val entityHabilidade = (Habilidade)getResponse.entity();
        System.out.println(entityHabilidade);
    }
}
