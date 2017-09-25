import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

const routes: Routes = [{
  path: '',
  component: EmployeesHomeComponent,
}, {
  path: 'new',
  component: EmployeesEditComponent
}, {
  path: ':EMPLOYEEID',
  component: EmployeesDetailComponent
}, {
  path: ':EMPLOYEEID/edit',
  component: EmployeesDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
