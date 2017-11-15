import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsDetailComponent } from './detail/accounts-detail.component';
import { AccountsEditComponent } from './edit/accounts-edit.component';
import { AccountsHomeComponent } from './home/accounts-home.component';
import { AccountsNewComponent } from './new/accounts-new.component';
import { TransactionsModule } from './detail/transactions/transactions.module';

export function loadTransactionsModule() {  return TransactionsModule; }

export const ACCOUNTS_MODULE_DECLARATIONS = [
  AccountsDetailComponent,
  AccountsEditComponent,
  AccountsHomeComponent,
  AccountsNewComponent
];

export const routes: Routes = [
  { path: '', component: AccountsHomeComponent },
  { path: 'new', component: AccountsNewComponent },
  { path: ':ACCOUNTID', component: AccountsDetailComponent },
  { path: ':ACCOUNTID/edit', component: AccountsEditComponent },
  { path: ':ACCOUNTID/transactions', loadChildren: loadTransactionsModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }