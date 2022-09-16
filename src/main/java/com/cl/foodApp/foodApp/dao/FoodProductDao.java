package com.cl.foodApp.foodApp.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cl.foodApp.foodApp.dto.FoodProduct;
import com.cl.foodApp.foodApp.repository.FoodProductRepository;

@Repository
public class FoodProductDao {
	@Autowired
	FoodProductRepository foodProductRepository;
	
	public FoodProduct saveProduct(FoodProduct foodProduct) {
		return foodProductRepository.saveAndFlush(foodProduct);
	}
	public void deleteProduct(int id) {
		foodProductRepository.deleteById(id);
	}

}
