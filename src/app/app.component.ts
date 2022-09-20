
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './LoginServices/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'foodAppFrontend';
  displayMenu=false;
  displayManager=false;
  displayStaff=false;
  currentRole:any;
  constructor(private router:Router,private loginService:LoginService){
  }
  ngDoCheck(): void {
    if(this.router.url=="/login"){
      this.displayMenu=false;
    }
    else{
      this.displayMenu=true;
    }
  }
  ngOnInit(): void {
    this.loginService.updateMenu.subscribe((res)=>{
      this.menuDisplay();
    })
    this.menuDisplay();
  }
  menuDisplay(){
    if(this.loginService.getrole()!=null){
      this.currentRole=this.loginService.getrole();
      this.displayManager=this.currentRole == 'manager';
      this.displayStaff=this.currentRole=='staff'
      console.log(this.currentRole);
    }
  }
  logout(){
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    window.alert("you are successfully logged out");
    this.router.navigate(['/login'])
  }
}
