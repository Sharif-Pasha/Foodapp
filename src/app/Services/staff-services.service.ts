import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffServicesService {

  constructor(private http:HttpClient) { }

  getStaffList(){
    return this.http.get("http://localhost:8080/getAllStaff");
  }

  getStaffById(_staffid:number){
    return this.http.get(`http://localhost:8080/user/${_staffid}`);
  }

  registerStaff(_managerid:number, staffDetails:any){
    return this.http.post(`http://localhost:8080/createStaff/${_managerid}`, staffDetails);
  }

  deleteStaff(_staffid:number){
    return this.http.delete(`http://localhost:8080/user/${_staffid}`);
  }

  editStaff(_staffid:number, staffDetails:any){
    return this.http.put(`http://localhost:8080/user/${_staffid}`, staffDetails);
  }

}
