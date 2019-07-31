import io.undertow.security.idm.Account;
import kikaha.core.modules.security.AbstractPasswordBasedIdentityManager;
import kikaha.core.modules.security.FixedUsernameAndRolesAccount;

public class CustomIdentityManager extends AbstractPasswordBasedIdentityManager {

    String login;
    String senha;
    Boolean mestre;
    String role;

    @Override
    public Account retrieveAccountFor(String id, String password ) {
        if(mestre)
            this.role = "mestre";
        else
            this.role = "jogador";
        if ( this.login.equals( id ) && this.senha.equals( password ) )
            return new FixedUsernameAndRolesAccount( login, role);
        return null;
    }
}
