package item;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface ItemQueries {

    @SqlQuery("SELECT * FROM ITEM")
    Set<Item> findAll();

    @SqlQuery("SELECT ITEM.*,INVENTARIO_HAS_ITEM.QTDINVENTARIOITEM FROM inventario " +
            "left join inventario_has_item on inventario_has_item.IDINVENTARIO " +
            "left join item on item.IDITEM = inventario_has_item.IDITEM where inventario.IDINVENTARIO = :idInventario")
    Set<Item> findByIdInventario(@Bind("idInventario")Long id);
}
