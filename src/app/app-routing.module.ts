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
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Guard/auth.guard';
import { ManagerGuard } from './Guard/manager.guard';

  
const routes: Routes = [
    {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
    {path:'',component:LoginComponent},
    {path:'listStaff', component: ListStaffComponent,canActivate:[ManagerGuard]},
    {path:'addStaff', component: AddStaffComponent,canActivate:[ManagerGuard]},
    {path:'editStaff/:id', component: EditStaffComponent,canActivate:[ManagerGuard]},
    {path:"listproducts",component:ListProductComponent,canActivate:[ManagerGuard]},
    {path:"editproduct/:id",component:EditProductComponent,canActivate:[ManagerGuard]},
    {path:"addproduct",component:AddProductComponent,canActivate:[ManagerGuard]},
    {path:"createOrder", component:CreateOrderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
