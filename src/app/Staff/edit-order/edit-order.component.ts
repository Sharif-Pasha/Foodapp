import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffServicesService } from 'src/app/Services/staff-services.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  order:any;
  error:any;
  editorder:any;
  constructor(private staff:StaffServicesService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id=Number(this.route.snapshot.params['id']);
    this.staff.getOrderById(id).subscribe((data)=>{
      this.order = data;
      console.log(this.order);
      
    }, (err)=>{
      this.error = err;
      console.log(this.error);      
    })
  }
  dropdownchange(){
    console.log(this.order.status);
    
  }
  editOrder(orderDetails:NgForm){
    orderDetails.value['id'] = this.order.id;
    this.staff.editOrder(orderDetails.value).subscribe((data)=>{     
      console.log(data);
      this.router.navigate(['/listorders']);
    }, (err)=>{
      console.log(err);
    })
  }

}
