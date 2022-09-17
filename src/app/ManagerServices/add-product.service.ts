import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http:HttpClient) { }
  addData(product:any){
    return this.http.post("http://localhost:8080/foodProduct",product)
  }
}
