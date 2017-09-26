import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { ODataTableModule } from 'ontimize-web-ngx-datatable';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    EmployeesRoutingModule,
    ODataTableModule
  ],
  declarations: [EmployeesHomeComponent, EmployeesDetailComponent, EmployeesEditComponent]
})
export class EmployeesModule { }
