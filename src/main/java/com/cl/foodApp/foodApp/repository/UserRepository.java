package com.cl.foodApp.foodApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cl.foodApp.foodApp.dto.User;
import org.springframework.stereotype.Repository;


public interface UserRepository extends JpaRepository<User, Integer>{
	@Query("SELECT u FROM User u WHERE role = 'staff'")
	List<User> getAllStaff();
	
	@Query("SELECT u FROM User u WHERE id = :id AND role = 'staff'")
	User getStaffById(@Param("id") int id);
	
	@Query("SELECT u FROM User u WHERE id = :id AND role = 'manager'")
	User getManagerById(@Param("id") int id);
	
	@Query("SELECT u FROM User u WHERE role = 'manager'")
	List<User> getAllManagers();
	
	@Query("SELECT u FROM User u WHERE email = :email AND password = :password")
	User getLoginAuth(@Param("email") String email,@Param("password") String password);
	
	@Query("SELECT u FROM User u WHERE branch_id = :branch_id")
	User branchIdFound(@Param("branch_id") Integer branch_id);


	
	
}