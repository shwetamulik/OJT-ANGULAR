package api.crud.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import api.crud.Model.*;

public interface UserRepository extends JpaRepository<User, Long> {


}
