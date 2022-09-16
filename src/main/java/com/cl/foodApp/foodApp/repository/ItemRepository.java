package com.cl.foodApp.foodApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cl.foodApp.foodApp.dto.Item;

public interface ItemRepository extends JpaRepository<Item, Integer>{

}