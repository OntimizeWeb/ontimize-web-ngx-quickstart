import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountTransactionsDetailComponent } from './detail/account-transactions-detail.component';

export const TRANSACTIONS_MODULE_DECLARATIONS = [
  AccountTransactionsDetailComponent
];

const routes: Routes = [
  { path: 'new', component: AccountTransactionsDetailComponent },
  { path: ':MOVEMENTID', component: AccountTransactionsDetailComponent },
  { path: ':MOVEMENTID/edit', component: AccountTransactionsDetailComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
