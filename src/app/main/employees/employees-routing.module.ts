import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';

const routes: Routes = [
  { path: '', component: EmployeesHomeComponent },
  { path: 'new', component: EmployeesDetailComponent },
  { path: ':EMPLOYEEID', component: EmployeesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
