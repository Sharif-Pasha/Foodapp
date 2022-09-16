package com.cl.foodApp.foodApp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cl.foodApp.foodApp.dao.FoodProductDao;
import com.cl.foodApp.foodApp.dto.FoodProduct;
import com.cl.foodApp.foodApp.dto.Menu;
@Service
public class FoodProductService {
	@Autowired
	FoodProductDao foodProductDao;
	
	public void saveProduct(FoodProduct foodProduct,int menu_id) {
		MenuServices menuServices= new MenuServices();
		Menu menu=menuServices.getMenuById(menu_id);
		if(menu != null) {
			foodProduct.setMenu(menu);
			foodProductDao.saveProduct(foodProduct);
			System.out.println("food product saved successfully");
			
		}
		else {
			System.out.println("first save menu");
		}
		
	}
	
	public FoodProduct updateProduct(FoodProduct foodProduct) {
		return foodProductDao.saveProduct(foodProduct);
	}
	public void deleteProduct(int id) {
		foodProductDao.deleteProduct(id);
	}

}
