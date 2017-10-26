import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { CustomersRoutingModule, CUSTOMERS_MODULE_DECLARATIONS } from './customers-routing.module';
import { ODataTableModule } from 'ontimize-web-ngx-datatable';
// import { OChartModule } from 'ontimize-web-ngx-charts';
// import { OMapModule } from 'ontimize-web-ngx-map';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    // OChartModule,
    // OMapModule,
    CustomersRoutingModule,
    ODataTableModule
  ],
  declarations: CUSTOMERS_MODULE_DECLARATIONS,
  exports: CUSTOMERS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersModule { }
