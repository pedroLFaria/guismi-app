package carros;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@JDBI
public interface CarroQueries {

    @SqlQuery("SELECT * FROM Carros WHERE id = :id")
    Carro findById(@Bind("id") Long id);

    @GetGeneratedKeys
    @SqlUpdate("INSERT INTO Carros (nome) VALUES (:nome)")
    long insert(@BindBean Carro carro);

}
