import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/LoginServices/login.service';
import { FoodProductService } from 'src/app/ManagerServices/food-product.service';
import { MenuService } from 'src/app/ManagerServices/menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
  _managerid:any;
  menu:any;
  food:any;
  foodProducts: any[] = [];
  constructor(private menuService:MenuService, private foodService:FoodProductService, private loginService:LoginService) { }

  ngOnInit(): void {
    this._managerid = Number(this.loginService.getId());
    this.menuService.getMenuByManagerId(this._managerid).subscribe((data)=>{
      this.menu = data;
      console.log(this.menu);
      
      this.foodService.getData().subscribe((data)=>{
        this.food = data;
        console.log(this.food);
        
        for(let fooditem of this.food.data){
          // console.log(fooditem);
          
          const index = this.menu.data.findIndex((obj: any)=>{
            return obj.id === fooditem.id;
          })
          if (index === -1){
            this.foodProducts.push(fooditem);
          }
        }
        console.log(this.foodProducts);
      })
    });

  }
  
  remove(productid:any){
    console.log(productid);
    this.menuService.removeProductFromMenu(this._managerid, productid).subscribe((data: any)=>{
      console.log(data);
      window.location.reload();
    })
  }
  add(productid:any){
    console.log(productid);
    console.log(this._managerid)
    this.menuService.addProductToMenu(this._managerid, productid).subscribe((data:any)=>{
      console.log(data);
      window.location.reload();
    });
  }
}
