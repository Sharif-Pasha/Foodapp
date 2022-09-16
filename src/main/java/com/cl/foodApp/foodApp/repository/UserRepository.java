package com.cl.foodApp.foodApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cl.foodApp.foodApp.dto.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}