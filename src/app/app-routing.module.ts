import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddStaffComponent } from './Manager/add-staff/add-staff.component';
import { EditStaffComponent } from './Manager/edit-staff/edit-staff.component';
import { ListStaffComponent } from './Manager/list-staff/list-staff.component';

const routes: Routes = [
  {path:'listStaff', component: ListStaffComponent},
  {path:'addStaff', component: AddStaffComponent},
  {path:'editStaff/:id', component: EditStaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
