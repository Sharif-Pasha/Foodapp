import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStaffComponent } from './Manager/add-staff/add-staff.component';
import { ListStaffComponent } from './Manager/list-staff/list-staff.component';
import { EditStaffComponent } from './Manager/edit-staff/edit-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStaffComponent,
    ListStaffComponent,
    EditStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
