import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';
import { OReportModule } from 'ontimize-web-ngx-report';

import { SharedModule } from '../../shared/shared.module';
import { CUSTOMERS_MODULE_DECLARATIONS, CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OFileManagerModule,
    CustomersRoutingModule,
    OReportModule
  ],
  declarations: CUSTOMERS_MODULE_DECLARATIONS,
  exports: CUSTOMERS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersModule { }
