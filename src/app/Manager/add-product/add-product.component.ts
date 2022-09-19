import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProductService } from 'src/app/ManagerServices/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private products:AddProductService, private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(form:NgForm){
    console.log(form.value);
    
    this.products.addData(form.value).subscribe((res)=>{
      console.log(res);
      // this.router.navigate(['details']) 
      
    })
  }
}

