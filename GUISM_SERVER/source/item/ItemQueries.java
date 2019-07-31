package item;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface ItemQueries {

    @SqlQuery("SELECT * FROM ITEM")
    Set<Item> findAll();
}
