import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffServicesService } from 'src/app/Services/staff-services.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  _staffid:number = 2;
  _order:any;
  menu:any;
  totalprice:number=0;
  error = false;
  errormsh:any;
  clicked:boolean = true;
  items: any[] = [];

  staffid=2;
  constructor(private staffService: StaffServicesService) { }

  ngOnInit(): void {
    this.staffService.getMenuByStaffId(this.staffid).subscribe((data)=>{
      this.menu = data;
      console.log(this.menu);
    }, (err)=>{
      this.error = err;
      this.error = err.message;
    })
    
  }

  addProduct(id:any, quantity:any){
    for(let i of this.menu.data){
      if(id == i.id){
        const index = this.items.findIndex((obj)=>{        
          return obj.productId === i.id;
        })
        
        if (index !== -1){          
          this.totalprice -= this.items[index].price * (this.items[index].quantity- quantity.value);
          this.items[index].quantity = quantity.value;
        }
        else{
          let item = {
            "productId":id,
            "name":i.name,
            "type":i.type,
            "quantity":quantity.value,
            "price":i.price
          }
          this.items.push(item);
          this.totalprice += i.price * quantity.value;
        }
        console.log(this.totalprice);
        console.log(this.items);
      }
    }
  }
  
  removeProduct(id:any){
    const index = this.items.findIndex((obj)=>{        
      return obj.productId === id;
    })
    console.log(this.items[index]);
    
    if (index !== 1){
      this.totalprice -= this.items[index].price * this.items[index].quantity;
      this.items.splice(index, 1);
      console.log(this.items);
      console.log(this.totalprice);
      
      
    }
  }

  createOrder(orderDetails:NgForm){
    orderDetails.value["totalPrice"] = this.totalprice;
    
    console.log("before order",orderDetails.value, this.items);
    this.staffService.createOrder(this._staffid, orderDetails.value).subscribe((data)=>{
      this._order = data;
      console.log(this._order.data); 
      
      this.staffService.addItems(Number(this._order.data.id), this.items).subscribe((data)=>{
        console.log(data);
      },(err)=>{
        console.log(err);
      });

    }, (err)=>{
      console.log(err);
      console.log(err.message);
    }); 

    // console.log(this._order.data.id, typeof(this._order.data.id));
    // console.log(this.items);
    
    // this.staffService.addItems(Number(this._order.data.id), this.items).subscribe((data)=>{
    //   console.log(data);
    // },(err)=>{
    //   console.log(err);
    // });
  }
  
}
