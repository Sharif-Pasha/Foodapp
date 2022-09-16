package com.cl.foodApp.foodApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cl.foodApp.foodApp.dto.FoodProduct;

public interface FoodProductRepository extends JpaRepository<FoodProduct, Integer>{

}