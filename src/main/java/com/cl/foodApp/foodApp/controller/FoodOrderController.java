package com.cl.foodApp.foodApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.cl.foodApp.foodApp.service.FoodOrderService;

@RestController
@CrossOrigin
public class FoodOrderController {
	@Autowired
	private FoodOrderService foodOrderService;
}
