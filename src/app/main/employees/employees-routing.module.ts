import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';

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
