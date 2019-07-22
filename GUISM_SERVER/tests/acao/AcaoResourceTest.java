package acao;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

@RunWith(KikahaRunner.class)
public class AcaoResourceTest {

    @Inject AcaoResource acaoResource;

    @Test
    public void getAcao(){
        val getResponse = acaoResource.findById(Long.valueOf(1));
        val entity = getResponse.entity();
        val entityAcao = (Acao) entity;
        System.out.println(((Acao) entity).getNome());
    }
}