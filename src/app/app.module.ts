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

@NgModule({
  declarations: [
    AppComponent,
    AddStaffComponent,
    ListStaffComponent,
    EditStaffComponent,
    AddProductComponent
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
