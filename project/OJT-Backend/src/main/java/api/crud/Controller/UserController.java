package api.crud.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import api.crud.Model.*;
import api.crud.Services.*;
@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	@CrossOrigin(origins = {"*"},allowCredentials = "false")
	public ResponseEntity<List<User>> getAllUsers(){
		return ResponseEntity.ok().body(userService.getAllUsers());
	}
	
	@GetMapping("/users/{id}")
	@CrossOrigin(origins = {"*"},allowCredentials = "false")
	public ResponseEntity<User> getUserById(@PathVariable long id){
		return ResponseEntity.ok().body(userService.getUserById(id));
	}
	
	@PostMapping("/users")
	@CrossOrigin(origins = {"*"},allowCredentials = "false")
	public ResponseEntity<User> createUser(@RequestBody User user){
		return ResponseEntity.ok().body(this.userService.createUser(user));
	}
	
	@PutMapping("/users/{id}")
	@CrossOrigin(origins = {"*"},allowCredentials = "false")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user){
		user.setId(id);
		return ResponseEntity.ok().body(this.userService.updateUser(user));
	}

	@DeleteMapping("/users/{id}")
	@CrossOrigin(origins = {"*"},allowCredentials = "false")
	public HttpStatus deleteUser(@PathVariable long id){
		this.userService.deleteUser(id);
		return HttpStatus.OK;
	}
	
}