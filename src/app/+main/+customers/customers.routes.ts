import { Routes } from '@angular/router';

import {
  CustomersHomeComponent,
  NewCustomerComponent,
  CustomersEditComponent,
  CustomersDetailComponent
} from '../+customers';

import {
  NewAccountComponent,
  AccountsEditComponent,
  AccountsDetailComponent,
  AccountTransactionsDetailComponent
} from '../+accounts';

export const CustomerRoutes: Routes = [
  {
    path: 'customers', component: CustomersHomeComponent,
  },
  {
    path: 'customers/new', component: NewCustomerComponent
  },
  {
    path: 'customers/:CUSTOMERID', component: CustomersDetailComponent
  },
  {
    path: 'customers/:CUSTOMERID/edit', component: CustomersEditComponent
  },
  {
    path: 'customers/:CUSTOMERID/accounts/new', component: NewAccountComponent
  },
  {
    path: 'customers/:CUSTOMERID/accounts/:ACCOUNTID', component: AccountsDetailComponent
  },
  {
    path: 'customers/:CUSTOMERID/accounts/:ACCOUNTID/edit', component: AccountsEditComponent
  },
  {
    path: 'customers/:CUSTOMERID/accounts/:ACCOUNTID/transactions/new',
    component: AccountTransactionsDetailComponent
  },
  {
    path: 'customers/:CUSTOMERID/accounts/:ACCOUNTID/transactions/:MOVEMENTID',
    component: AccountTransactionsDetailComponent
  },
  {
    path: 'customers/:CUSTOMERID/accounts/:ACCOUNTID/transactions/:MOVEMENTID/edit',
    component: AccountTransactionsDetailComponent
  }
];

