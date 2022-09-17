package com.cl.foodApp.foodApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cl.foodApp.foodApp.dao.FoodOrderDao;

@Service
public class FoodOrderService {
	@Autowired
	private FoodOrderDao foodOrderDao;
	
}
