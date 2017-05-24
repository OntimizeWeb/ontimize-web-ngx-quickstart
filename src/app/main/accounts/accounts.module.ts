import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { AccountsRoutingModule, ACCOUNTS_MODULE_DECLARATIONS } from './accounts-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    AccountsRoutingModule
  ],
  declarations: ACCOUNTS_MODULE_DECLARATIONS,
  exports: ACCOUNTS_MODULE_DECLARATIONS
})
export class AccountsModule { }
