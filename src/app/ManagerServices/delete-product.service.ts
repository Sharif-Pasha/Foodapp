import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  constructor(private http:HttpClient) { }
  deleteData(id:any){
  return  this.http.delete(`http://localhost:8080/foodProduct/${id}`)
  }
}
