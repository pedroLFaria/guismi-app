package habilidade;

import caminho.Caminho;
import descendencia.Descendencia;
import ficha.Ficha;
import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import raca.Raca;

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
}
