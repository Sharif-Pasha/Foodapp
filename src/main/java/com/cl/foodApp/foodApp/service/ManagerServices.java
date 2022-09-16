package com.cl.foodApp.foodApp.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cl.foodApp.foodApp.dao.UserDao;
import com.cl.foodApp.foodApp.dto.User;

@Service
public class ManagerServices {
	@Autowired
	UserDao userDao;
	public User saveStaff(User user) {
		return userDao.saveUser(user);
	}
	public void deleteStaff(int id) {
		userDao.deleteUser(id);

		
	}
	public List<User> getAllStaff(){
		return userDao.getAllUser();
	}
	public User updateStaff(User user) {
		return userDao.saveUser(user);
	}
	public User getById(int id) {
		Optional<User> found=userDao.getUserById(id);
		if(found.isPresent()) {
			return found.get();
		}
		else {
			return null;
		}
	}
}
