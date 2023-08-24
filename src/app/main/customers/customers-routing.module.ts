import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersDetailComponent } from './detail/customers-detail.component';
import { CustomersHomeComponent } from './home/customers-home.component';
import { CustomersNewComponent } from './new/customers-new.component';

export const CUSTOMERS_MODULE_DECLARATIONS = [
  CustomersDetailComponent,
  CustomersHomeComponent,
  CustomersNewComponent
];

export const routes: Routes = [
  { path: '', component: CustomersHomeComponent },
  { path: 'new', component: CustomersNewComponent },
  {
    path: ':CUSTOMERID',
    component: CustomersDetailComponent,
    data: {
      oPermission: {
        permissionId: 'customer-detail-permissions'
      }
    }
  },
  {
    path: ':CUSTOMERID/accounts', loadChildren: () => import('../accounts/accounts.module').then(m => m.AccountsModule),
    data: {
      oPermission: {
        permissionId: 'customer-detail-permissions'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
