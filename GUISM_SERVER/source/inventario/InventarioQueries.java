package inventario;

import item.Item;
import kikaha.jdbi.JDBI;
import lombok.val;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface InventarioQueries {

    default Set<Inventario> findByIdFichaPreenchido(Long id){
        val inventarios = findByIdFicha(id);
        for (Inventario inventario : inventarios){
            inventario.setItems(findItemByIdInventario(inventario.getIdInventario()));
        }
        return inventarios;
    }

    @SqlQuery("SELECT INVENTARIO.* FROM FICHA " +
            "right JOIN FICHA_HAS_INVENTARIO ON FICHA.IDFICHA = FICHA_HAS_INVENTARIO.IDFICHA " +
            "right JOIN INVENTARIO ON FICHA_HAS_INVENTARIO.IDINVENTARIO = INVENTARIO.IDINVENTARIO WHERE FICHA.IDFICHA = :idFicha")
    Set<Inventario> findByIdFicha(@Bind("idFicha")Long id);

    @SqlQuery("SELECT ITEM.*,INVENTARIO_HAS_ITEM.QTDINVENTARIOITEM FROM inventario " +
            "left join inventario_has_item on inventario_has_item.IDINVENTARIO " +
            "left join item on item.IDITEM = inventario_has_item.IDITEM where inventario.IDINVENTARIO = :idInventario")
    Set<Item> findItemByIdInventario(@Bind("idInventario")Long id);

    @SqlQuery("INSERT INTO INVENTARIO(NOMEINVENTARIO) VALUES(:nomeInventario")
    Long insert(@BindBean Inventario inventario);
}
