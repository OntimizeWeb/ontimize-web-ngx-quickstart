import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersDetailComponent } from './detail/customers-detail.component';
import { CustomersEditComponent } from './edit/customers-edit.component';
import { CustomersHomeComponent } from './home/customers-home.component';
import { CustomersNewComponent } from './new/customers-new.component';

import { AccountsModule } from '../accounts/accounts.module';

export const CUSTOMERS_MODULE_DECLARATIONS = [
  CustomersDetailComponent,
  CustomersEditComponent,
  CustomersHomeComponent,
  CustomersNewComponent
];

const routes: Routes = [
  { path: '', component: CustomersHomeComponent },
  { path: 'new', component: CustomersNewComponent },
  { path: ':CUSTOMERID', component: CustomersDetailComponent },
  { path: ':CUSTOMERID/edit', component: CustomersEditComponent },
  {
    path: ':CUSTOMERID/accounts',
    loadChildren: () => AccountsModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
