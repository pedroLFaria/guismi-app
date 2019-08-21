package jogador;

import kikaha.jdbi.JDBI;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

@JDBI
public interface JogadorQueries {

    @SqlQuery("SELECT IDJOGADOR, NOMEJOGADOR, MESTRE FROM guism.jogador where login = :login")
    Jogador findByLogin(@Bind("login")String login);
}
