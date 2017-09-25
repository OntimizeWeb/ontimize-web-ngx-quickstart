import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { AccountsRoutingModule, ACCOUNTS_MODULE_DECLARATIONS } from './accounts-routing.module';
import { OChartModule } from 'ontimize-web-ng2-charts';
import { ODataTableModule } from 'ontimize-web-ngx-datatable';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OChartModule,
    AccountsRoutingModule,
    ODataTableModule
  ],
  declarations: ACCOUNTS_MODULE_DECLARATIONS,
  exports: ACCOUNTS_MODULE_DECLARATIONS
})
export class AccountsModule { }

