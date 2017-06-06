import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ng2';

import { MainComponent } from './main.component';
import { AccountsModule } from './accounts/accounts.module';
import { CustomersModule } from './customers/customers.module';

export function loadCustomersModule() {
  return CustomersModule;
}

export function loadAccountsModule() {
  return AccountsModule;
}

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'customers', pathMatch: 'full' },
      {
        path: 'customers',
        loadChildren: loadCustomersModule
      },
      {
        path: 'accounts',
        loadChildren: loadAccountsModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
