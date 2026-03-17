import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OReportModule } from 'ontimize-web-ngx-report';
import { OExtraComponentsModule } from 'ontimize-web-ngx-extra-components';

import { SharedModule } from '../../shared/shared.module';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    EmployeesRoutingModule,
    OReportModule,
    OExtraComponentsModule
  ],
  declarations: [EmployeesHomeComponent, EmployeesDetailComponent]
})
export class EmployeesModule { }
