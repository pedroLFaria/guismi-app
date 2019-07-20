package users;

import lombok.*;

@Data
public class User {

    final long id = System.currentTimeMillis();

    @NonNull
    String name;
}
