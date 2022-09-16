package com.cl.foodApp.foodApp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cl.foodApp.foodApp.dao.MenuDao;
import com.cl.foodApp.foodApp.dto.Menu;

@Service
public class MenuServices {
	@Autowired
	private MenuDao menuDao;
	
	public Menu createMenu(Menu menu) {
        return menuDao.createMenu(menu);
    }
	public Menu getMenuById(int id) {
		return menuDao.getMenuById(id);
	  }
	  

}
