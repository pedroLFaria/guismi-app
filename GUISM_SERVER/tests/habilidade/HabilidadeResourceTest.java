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

    @Test
    public void random() {
        Ficha ficha = new Ficha();
        ficha.setIdFicha(1L);
        System.out.println(habilidadeResource.findByObject(ficha));
        Raca raca = new Raca();
        raca.setIdRaca(1L);
        System.out.println(habilidadeResource.findByObject(raca));
        Caminho caminho = new Caminho();
        caminho.setIdCaminho(1L);
        System.out.println(habilidadeResource.findByObject(caminho));
        Descendencia descendencia = new Descendencia();
        descendencia.setIdDescendencia(1L);
        System.out.println(habilidadeResource.findByObject(descendencia));
    }
}
