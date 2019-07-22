package carros;

import kikaha.core.test.KikahaRunner;
import lombok.val;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

import static org.junit.Assert.*;

@RunWith(KikahaRunner.class)
public class CarrosResourceTest {

    @Inject CarrosResource carrosResource;

    @Test
    public void ensureCanInsertNewCar(){
        val carro = new Carro();

        carro.setNome( "Gol G6" );
        val insertResponse = carrosResource.insertNewCar( carro );
        val generatedId = insertResponse.header( "Generated-Id" );
        assertNotNull( generatedId );
        val getResponse = carrosResource.findById( Long.valueOf(generatedId.values().get(0)) );
        val entity = getResponse.entity();
        assertTrue( entity instanceof Carro );
        val entityAsCarro = (Carro) entity;
        assertEquals( "Gol G6", entityAsCarro.getNome() );
    }

}