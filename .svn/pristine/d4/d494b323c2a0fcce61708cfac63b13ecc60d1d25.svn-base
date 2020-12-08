package api.crud.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import api.crud.Exception.ResourceNotFoundException;
import api.crud.Model.*;
import api.crud.Repository.*;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	
	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User updateUser(User user) {
		Optional<User> userDb = this.userRepository.findById(user.getId());
		
		if(userDb.isPresent()) {
			User userUpdate = userDb.get();
			userUpdate.setId(user.getId());
			userUpdate.setFirstname(user.getFirstname());
		//	userUpdate.setUsername(user.getUsername());
			userUpdate.setPassword(user.getPassword());
			userUpdate.setEmail(user.getEmail());
			userUpdate.setRole(user.getRole());
			userUpdate.setLastname(user.getLastname());
			userUpdate.setPhone(user.getPhone());
			//userUpdate.setDesignation(user.getDesignation());
			//userUpdate.setDeleteFlag(user.getDeleteFlag());
			
		
			userRepository.save(userUpdate);
			return userUpdate;
		}else {
			throw new ResourceNotFoundException("Record not found with id : " + user.getId());
		}		
	}

	@Override
	public List<User> getAllUsers() {
		return this.userRepository.findAll();
	}

	@Override
	public User getUserById(long userId) {
		
		Optional<User> userDb = this.userRepository.findById(userId);
		
		if(userDb.isPresent()) {
			return userDb.get();
		}else {
			throw new ResourceNotFoundException("Record not found with id : " + userId);
		}
	}

	@Override
	public void deleteUser(long userId) {
		Optional<User> userDb = this.userRepository.findById(userId);
		
		if(userDb.isPresent()) {
			this.userRepository.delete(userDb.get());
		}else {
			throw new ResourceNotFoundException("Record not found with id : " + userId);
		}
		
	}
	
	
	
}