 package com.cl.foodApp.foodApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cl.foodApp.foodApp.dao.BranchDao;
import com.cl.foodApp.foodApp.dao.FoodOrderDao;
import com.cl.foodApp.foodApp.dao.MenuDao;
import com.cl.foodApp.foodApp.dao.UserDao;
import com.cl.foodApp.foodApp.dto.Branch;
import com.cl.foodApp.foodApp.dto.Menu;
import com.cl.foodApp.foodApp.dto.User;
import com.cl.foodApp.foodApp.util.ResponseStructure;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;
	@Autowired 
	private MenuDao menuDao; 
	@Autowired
	private FoodOrderDao foodOrderDao;
	@Autowired
	private BranchDao branchDao;
	
	@SuppressWarnings("unused")
	public ResponseEntity<ResponseStructure<User>> createManager(int branch_id,User manager) {
		
		User branchId;
		branchId=userDao.branchIdFound(branch_id);
		 
		
		if(branchId!=null) {
			ResponseStructure<User> responseStructure = new ResponseStructure<>();
			responseStructure.setError(true);
			responseStructure.setMessage("branch is already assigned to a manager");
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.CONFLICT);
		}
		else {
			manager.setRole("manager");
			Branch details=branchDao.getBranchById(branch_id).get();
			manager.setBranch(details);
			User createdManager =  userDao.saveUser(manager);
			Menu menu = new Menu();
			menu.setUser(createdManager);
			menuDao.createMenu(menu);
			
			ResponseStructure<User> responseStructure = new ResponseStructure<>();
			responseStructure.setError(false);
			responseStructure.setMessage("manager created and assigned with a branch");
			responseStructure.setData(createdManager);
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.CREATED);
		}
		
    }
	
	
	public ResponseEntity<ResponseStructure<User>> createStaff(int managerid, User staff) {
		User manager=userDao.getUserById(managerid).get();
		String roles=manager.getRole();
		System.out.println(manager);
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		if(roles=="staff" || roles=="admin") {

			responseStructure.setError(true);
			responseStructure.setMessage("please enter manager id to create staff");
			return new ResponseEntity<ResponseStructure<User>> (responseStructure, HttpStatus.NOT_FOUND);
		}
		else {
			Menu menu = menuDao.getMenuByUserId(managerid);
			Branch branchid=userDao.getUserById(managerid).get().getBranch();
			staff.setRole("staff");
			staff.setMenu(menu);
			staff.setBranch(branchid);
			responseStructure.setError(false);
			responseStructure.setMessage("staff created and joined with menu");
			responseStructure.setData(userDao.saveUser(staff));
			return new ResponseEntity<ResponseStructure<User>> (responseStructure, HttpStatus.OK);
			
			
		}
		
	}
	//code for me
	public ResponseEntity<ResponseStructure<List<User>>> getAllManagers(){
		List<User> users = userDao.getAllManagers();
		ResponseStructure<List<User>> responseStructure = new ResponseStructure<>();
		
		if (users.isEmpty()) {
			responseStructure.setError(true);
			responseStructure.setMessage("no user found");
			return new ResponseEntity<ResponseStructure<List<User>>> (responseStructure, HttpStatus.NO_CONTENT);
		}
		else {
		responseStructure.setError(false);
		responseStructure.setMessage("list of all users");
		responseStructure.setData(users);
		return new ResponseEntity<ResponseStructure<List<User>>> (responseStructure, HttpStatus.OK);
		}
	}
    
	public ResponseEntity<ResponseStructure<User>> getUserById(int userid) {
		Optional<User> found=userDao.getUserById(userid);
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		if(found.isPresent()) {
			responseStructure.setError(false);
			responseStructure.setMessage("data found");
			responseStructure.setData(found.get());
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.OK);
		}
		else {
			responseStructure.setError(true);
			responseStructure.setMessage("not found");
			responseStructure.setData(null);
			
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.NO_CONTENT);
		}
	}
	
	public  ResponseEntity<ResponseStructure<List<User>>> getAllStaff() {
		List<User> users = userDao.getAllStaff();
		ResponseStructure<List<User>> responseStructure = new ResponseStructure<>();
		responseStructure.setData(users);
		if (users.isEmpty()) {
			responseStructure.setError(true);
			responseStructure.setMessage("no staff found");
			return new ResponseEntity<ResponseStructure<List<User>>> (responseStructure, HttpStatus.NO_CONTENT);
		}
		else {
		responseStructure.setError(false);
		responseStructure.setMessage("list of all staff");
		return new ResponseEntity<ResponseStructure<List<User>>> (responseStructure, HttpStatus.OK);
		}
	}
	
	public ResponseEntity<ResponseStructure<User>> updateUser(int userid, User user) {
		User existingUser = userDao.getStaffById(userid);
		BeanUtils.copyProperties(user, existingUser, "id", "password" ,"role", "menu");
		
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		responseStructure.setError(false);
		responseStructure.setMessage("user updated");
		responseStructure.setData(userDao.saveUser(existingUser));
		return new ResponseEntity<ResponseStructure<User>>(responseStructure,HttpStatus.OK);
	}
	
    public  ResponseEntity<ResponseStructure<String>> deleteUserById(int userId) {
    	ResponseStructure<String> responseStructure = new ResponseStructure<>();
    	int x = foodOrderDao.updateUserIdToNull(userId);
    	System.out.println(x);
    	userDao.deleteUserById(userId); 
    	responseStructure.setError(false);
    	responseStructure.setMessage("user deleted");
    	responseStructure.setData("User with "+ userId+" deleted");
    	return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.OK);    		
    	
    }
    
    public ResponseEntity<ResponseStructure<User>> loginAuth(User user){
    	User checkuser = userDao.getLoginAuth(user.getEmail(), user.getPassword());
    	if (checkuser == null) {
    		ResponseStructure<User> responseStructure = new ResponseStructure<>();
    		responseStructure.setError(true);
    		responseStructure.setMessage("no user found");
    		responseStructure.setData(checkuser);
    		
    		return new ResponseEntity<ResponseStructure<User>> (responseStructure, HttpStatus.NOT_FOUND);
    	}
    	else {
    		ResponseStructure<User> responseStructure = new ResponseStructure<>();
    		responseStructure.setError(false);
    		responseStructure.setMessage("user found");
    		responseStructure.setData(checkuser);
    		return new ResponseEntity<ResponseStructure<User>> (responseStructure, HttpStatus.OK);
    	}	
    }
}
