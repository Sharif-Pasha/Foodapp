package com.cl.foodApp.foodApp.dto;

import java.time.LocalTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class FoodOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String status;
	private float totalPrice;
	private LocalTime orderCreatedTime;
	private LocalTime orderDeliveryTime;
	private String customerName;
	private long contactNumber;
	
	
	@ManyToOne
	@JoinColumn
	User user;
	
	@OneToMany(mappedBy = "foodOrder")
	private List<Item> items;
	
	


	public List<Item> getItems() {
		return items;
	}


	public void setItems(List<Item> items) {
		this.items = items;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public float getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}


	public LocalTime getOrderCreatedTime() {
		return orderCreatedTime;
	}


	public void setOrderCreatedTime(LocalTime orderCreatedTime) {
		this.orderCreatedTime = orderCreatedTime;
	}


	public LocalTime getOrderDeliveryTime() {
		return orderDeliveryTime;
	}


	public void setOrderDeliveryTime(LocalTime orderDeliveryTime) {
		this.orderDeliveryTime = orderDeliveryTime;
	}


	public String getCustomerName() {
		return customerName;
	}


	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}


	public long getContactNumber() {
		return contactNumber;
	}


	public void setContactNumber(long contactNumber) {
		contactNumber = contactNumber;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}
	
}
