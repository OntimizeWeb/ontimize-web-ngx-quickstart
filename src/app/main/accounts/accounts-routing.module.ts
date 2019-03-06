import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsDetailComponent } from './detail/accounts-detail.component';
import { AccountTransactionsDetailComponent } from './detail/transaction/account-transaction.component';
import { AccountsEditComponent } from './edit/accounts-edit.component';
import { AccountsHomeComponent } from './home/accounts-home.component';
import { AccountsNewComponent } from './new/accounts-new.component';

export const ACCOUNTS_MODULE_DECLARATIONS = [
  AccountsDetailComponent,
  AccountsEditComponent,
  AccountsHomeComponent,
  AccountsNewComponent,
  AccountTransactionsDetailComponent
];

export const routes: Routes = [
  { path: '', component: AccountsHomeComponent },
  { path: 'new', component: AccountsNewComponent },
  { path: ':ACCOUNTID', component: AccountsDetailComponent },
  { path: ':ACCOUNTID/edit', component: AccountsEditComponent },
  { path: ':ACCOUNTID/:MOVEMENTID', component: AccountTransactionsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
