package com.cl.foodApp.foodApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cl.foodApp.foodApp.dto.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer>{

}