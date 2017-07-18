import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ng2';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeesHomeComponent, EmployeesDetailComponent, EmployeesEditComponent]
})
export class EmployeesModule { }
