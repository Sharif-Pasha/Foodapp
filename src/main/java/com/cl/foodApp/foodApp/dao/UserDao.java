package com.cl.foodApp.foodApp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cl.foodApp.foodApp.dto.User;
import com.cl.foodApp.foodApp.repository.UserRepository;

@Repository
public class UserDao {
	@Autowired
    private UserRepository userRepository;
    
    public User saveUser(User user) {
    	return userRepository.save(user);
    }
    
    public void deleteUserById(int userid) {
        userRepository.deleteById(userid);
    }
    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);   
    }
    public User getManagerBYId(int id) {
    	return userRepository.getManagerById(id);
    }
    public List<User> getAllManagers(){
        return userRepository.getAllManagers();
    }
    public User getStaffById(int id){
    	return userRepository.getStaffById(id);
    }
    
    public List<User> getAllStaff(){
    	return userRepository.getAllStaff();
    }
    public User getLoginAuth(String email, String password) {
    	return userRepository.getLoginAuth(email, password);
    }
    public User branchIdFound(Integer id) {
    	return userRepository.branchIdFound(id);
    	
    	 
    }
}
