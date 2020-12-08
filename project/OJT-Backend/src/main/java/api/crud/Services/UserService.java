package api.crud.Services;

import java.util.List;

import org.springframework.web.servlet.config.annotation.CorsRegistry;

import api.crud.Model.*;

public interface UserService {
	User createUser(User user);

	User updateUser(User user);

	List<User> getAllUsers();

	User getUserById(long userId);

	void deleteUser(long id);
 	
}

