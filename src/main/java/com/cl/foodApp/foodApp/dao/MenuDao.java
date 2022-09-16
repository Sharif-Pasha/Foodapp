package com.cl.foodApp.foodApp.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cl.foodApp.foodApp.dto.Menu;

import com.cl.foodApp.foodApp.repository.MenuRepository;
@Repository
public class MenuDao {
	@Autowired
    private MenuRepository menuRepository;
    
    public Menu createMenu(Menu menu) {
        return menuRepository.saveAndFlush(menu);
    }
    public Menu getMenuById(int id) {
		return menuRepository.findById(id).get();
    }

}
