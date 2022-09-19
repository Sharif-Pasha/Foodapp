import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../LoginServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result:any;
  constructor(private user:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(form:NgForm){
    console.log(form.value);
    this.user.login(form.value).subscribe((res)=>{
      this.result=res;
      console.log(this.result);
      localStorage.setItem('id',this.result.data.id)
      localStorage.setItem('role',this.result.data.role)

      this.router.navigate(['/home'])
      console.log(this.result.data.role);
      

    },(err)=>{
      console.log(err);
      
    })
    
  }
}
