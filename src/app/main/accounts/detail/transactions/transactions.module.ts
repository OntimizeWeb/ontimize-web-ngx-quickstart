import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../../../shared/shared.module';
import { TransactionsRoutingModule, TRANSACTIONS_MODULE_DECLARATIONS } from './transactions-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    TransactionsRoutingModule
  ],
  declarations: TRANSACTIONS_MODULE_DECLARATIONS,
  exports: TRANSACTIONS_MODULE_DECLARATIONS
})
export class TransactionsModule { }
