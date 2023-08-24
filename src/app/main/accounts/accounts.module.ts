import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { OReportModule } from 'ontimize-web-ngx-report';

import { SharedModule } from '../../shared/shared.module';
import { ACCOUNTS_MODULE_DECLARATIONS, AccountsRoutingModule } from './accounts-routing.module';
import { AccountTransactionsDetailComponent } from './detail/transaction/account-transaction.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OChartModule,
    AccountsRoutingModule,
    OReportModule
  ],
  declarations: ACCOUNTS_MODULE_DECLARATIONS,
  entryComponents: [AccountTransactionsDetailComponent],
  exports: ACCOUNTS_MODULE_DECLARATIONS
})
export class AccountsModule { }
