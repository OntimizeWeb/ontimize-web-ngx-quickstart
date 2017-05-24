import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ng2';

import { MainComponent } from './main.component';
import { AccountsModule } from './accounts/accounts.module';
import { CustomersModule } from './customers/customers.module';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'customers', pathMatch: 'prefix' },
      {
        path: 'customers',
        loadChildren: () => CustomersModule
      },
      {
        path: 'accounts',
        loadChildren: () => AccountsModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
