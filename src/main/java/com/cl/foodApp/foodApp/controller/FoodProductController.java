package com.cl.foodApp.foodApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cl.foodApp.foodApp.dto.FoodProduct;
import com.cl.foodApp.foodApp.service.FoodProductService;

@RestController
@RequestMapping("api/v1/manager")
public class FoodProductController {
	@Autowired
	FoodProductService foodProductService;
	
	@PostMapping("/foodProduct")
	public void saveProduct(@RequestBody FoodProduct foodProduct ) {
		foodProductService.saveProduct(foodProduct,1);
	}
	@PutMapping("/foodProduct")
	public FoodProduct updateProduct(@RequestBody FoodProduct foodProduct) {
		return foodProductService.updateProduct(foodProduct);
	}
	@DeleteMapping("foodProduct")
	public void deleteProduct(@PathVariable int id) {
		foodProductService.deleteProduct(id);
	}
	
}
