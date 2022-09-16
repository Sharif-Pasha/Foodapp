package com.cl.foodApp.foodApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cl.foodApp.foodApp.dto.Menu;
import com.cl.foodApp.foodApp.service.MenuServices;
@RestController
public class MenuController {
	@Autowired
	private MenuServices menuServices;
	@PostMapping("/menu")
	public Menu createMenu(@RequestBody Menu menu) {
        return menuServices.createMenu(menu);
    }
	@GetMapping("menu/{id}")
	public Menu getMenuById(@PathVariable int id) {
		return menuServices.getMenuById(id);
	  }

}
