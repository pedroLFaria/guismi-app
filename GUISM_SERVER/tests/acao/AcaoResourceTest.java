package acao;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

import java.util.List;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(KikahaRunner.class)
public class AcaoResourceTest {

    @Inject AcaoResource acaoResource;

    @Test
    public void getAcao(){
        val getResponse = acaoResource.findById(1L);
        val entity = getResponse.entity();
        System.out.println(entity);
        val entityAcao = (Acao) entity;
        assertEquals(entityAcao.nome, "Ação Hipotetica");
    }

    @Test
    public void validaGetAcaoByHabilidadeId(){
        val getResponse = acaoResource.findByHabilidadeId(1L);
        val entityAcao = (Set<Acao>) getResponse.entity();
        System.out.println( entityAcao);
    }
}