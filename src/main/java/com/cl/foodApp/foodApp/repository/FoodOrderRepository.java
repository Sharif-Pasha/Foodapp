package com.cl.foodApp.foodApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cl.foodApp.foodApp.dto.FoodOrder;

public interface FoodOrderRepository extends JpaRepository<FoodOrder, Integer>{
	
}