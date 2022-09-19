import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './Manager/add-product/add-product.component';
import { EditProductComponent } from './Manager/edit-product/edit-product.component';
import { ListProductComponent } from './Manager/list-product/list-product.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"listproducts",component:ListProductComponent},
  {path:"editproduct/:id",component:EditProductComponent},
  {path:"addproduct",component:AddProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
