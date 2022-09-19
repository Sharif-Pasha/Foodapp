import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://localhost:8080/foodProduct");
  }
  editData(id:any,product:any){
    return this.http.put(`http://localhost:8080/foodProduct/${id}`,product)
  }
}
