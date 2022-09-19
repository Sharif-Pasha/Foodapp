import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../LoginServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:LoginService) { }

  ngOnInit(): void {
  }
  loginUser(form:NgForm){
    console.log(form.value);
    this.user.login(form.value).subscribe((res)=>{
      console.log(res);
      
    })
    
  }
}
