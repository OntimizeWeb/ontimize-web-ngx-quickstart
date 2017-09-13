import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { CustomersRoutingModule, CUSTOMERS_MODULE_DECLARATIONS } from './customers-routing.module';
// import { OChartModule } from 'ontimize-web-ng2-charts';
// import { OMapModule } from 'ontimize-web-ng2-map';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    // OChartModule,
    // OMapModule,
    CustomersRoutingModule
  ],
  declarations: CUSTOMERS_MODULE_DECLARATIONS,
  exports: CUSTOMERS_MODULE_DECLARATIONS
})
export class CustomersModule { }
