import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeesHomeComponent, EmployeesDetailComponent]
})
export class EmployeesModule { }
