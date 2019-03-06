import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';
import { SharedModule } from '../../shared/shared.module';
import { CustomersRoutingModule, CUSTOMERS_MODULE_DECLARATIONS } from './customers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OFileManagerModule,
    CustomersRoutingModule
  ],
  declarations: CUSTOMERS_MODULE_DECLARATIONS,
  exports: CUSTOMERS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersModule { }
