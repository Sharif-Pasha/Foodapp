import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStaffComponent } from './Manager/add-staff/add-staff.component';
import { ListStaffComponent } from './Manager/list-staff/list-staff.component';
import { EditStaffComponent } from './Manager/edit-staff/edit-staff.component';
import { AddProductComponent } from './Manager/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListProductComponent } from './Manager/list-product/list-product.component';
import { EditProductComponent } from './Manager/edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './Staff/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStaffComponent,
    ListStaffComponent,
    EditStaffComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    LoginComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
