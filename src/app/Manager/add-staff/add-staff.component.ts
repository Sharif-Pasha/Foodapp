import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffServicesService } from 'src/app/Services/staff-services.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  createdStaff:any;
  managerid=1;
  constructor(private staff:StaffServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  registerStaff(staffDetails:NgForm){
    this.staff.registerStaff(this.managerid, staffDetails.value).subscribe((res)=>{
      this.createdStaff = res;
      console.log(this.createdStaff);
      this.router.navigate(["/listStaff"]); 
    }, (err)=>{
      console.log(err.message);
    });

  }

}
