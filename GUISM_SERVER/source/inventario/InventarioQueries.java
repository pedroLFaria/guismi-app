package inventario;

import ficha.Ficha;
import item.Item;
import kikaha.jdbi.JDBI;
import lombok.val;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.Set;

@JDBI
public interface InventarioQueries {

    @SqlQuery("SELECT INVENTARIO.* FROM FICHA " +
            "right JOIN FICHA_HAS_INVENTARIO ON FICHA.IDFICHA = FICHA_HAS_INVENTARIO.IDFICHA " +
            "right JOIN INVENTARIO ON FICHA_HAS_INVENTARIO.IDINVENTARIO = INVENTARIO.IDINVENTARIO WHERE FICHA.IDFICHA = :idFicha")
    Set<Inventario> findByObject(@BindBean Ficha ficha);

    @SqlQuery("INSERT INTO INVENTARIO(NOMEINVENTARIO) VALUES(:nomeInventario")
    Long insert(@BindBean Inventario inventario);
}
