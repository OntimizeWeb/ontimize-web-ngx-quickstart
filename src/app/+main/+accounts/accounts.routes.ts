import { Routes } from '@angular/router';

import {
  AccountsHomeComponent,
  NewAccountComponent,
  AccountsEditComponent,
  AccountsDetailComponent,
  AccountTransactionsDetailComponent
} from '../+accounts';


export const AccountsRoutes: Routes = [
  {
    path: 'accounts', component: AccountsHomeComponent
  },
  {
    path: 'accounts/new', component: NewAccountComponent
  },
  {
    path: 'accounts/:ACCOUNTID', component: AccountsDetailComponent
  },
  {
    path: 'accounts/:ACCOUNTID/edit', component: AccountsEditComponent
  },
  {
    path: 'accounts/:ACCOUNTID/transactions/new', component: AccountTransactionsDetailComponent
  },
  {
    path: 'accounts/:ACCOUNTID/transactions/:MOVEMENTID',
    component: AccountTransactionsDetailComponent
  },
  {
    path: 'accounts/:ACCOUNTID/transactions/:MOVEMENTID/edit',
    component: AccountTransactionsDetailComponent
  }
];
