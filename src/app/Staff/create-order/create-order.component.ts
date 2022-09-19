import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListProductService } from 'src/app/ManagerServices/list-product.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  result:any;
  error:any;
  errorMsg:any;
  constructor(private products:ListProductService) { }

  ngOnInit(): void {
    this.products.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);
      
    },(err)=>{
      console.log(err);
      this.error=err;
      this.errorMsg=err.message
      console.log(this.errorMsg);
    });
    console.log(this.result);
    
  }

  placeOrder(orderDetails:NgForm){
    console.log(orderDetails.value);
    console.log(orderDetails.value.items);
    
    
  }

}
