import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffComponent } from './Manager/add-staff/add-staff.component';
import { EditStaffComponent } from './Manager/edit-staff/edit-staff.component';
import { ListStaffComponent } from './Manager/list-staff/list-staff.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './Manager/add-product/add-product.component';
import { EditProductComponent } from './Manager/edit-product/edit-product.component';
import { ListProductComponent } from './Manager/list-product/list-product.component';
import { CreateOrderComponent } from './Staff/create-order/create-order.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'listStaff', component: ListStaffComponent},
  {path:'addStaff', component: AddStaffComponent},
  {path:'editStaff/:id', component: EditStaffComponent},
  {path:"listproducts",component:ListProductComponent},
  {path:"editproduct/:id",component:EditProductComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"createOrder", component:CreateOrderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
