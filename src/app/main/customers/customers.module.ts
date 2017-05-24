import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { CustomersRoutingModule, CUSTOMERS_MODULE_DECLARATIONS } from './customers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ],
  declarations: CUSTOMERS_MODULE_DECLARATIONS,
  exports: CUSTOMERS_MODULE_DECLARATIONS
})
export class CustomersModule { }
