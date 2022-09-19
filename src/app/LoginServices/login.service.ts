import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post("http://localhost:8080/login",user)
  }
  getId(){
    return localStorage.getItem('id');
  }
  getrole(){
    return localStorage.getItem('role');
  }
  isLoggedIn(){
    if(localStorage.getItem("id")){
      return true;
    }
    else{
      return false;
    }
  }
}
