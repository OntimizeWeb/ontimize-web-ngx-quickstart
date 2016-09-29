import { Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ng2/ontimize';

import {
  CustomerRoutes
} from './+customers/customers.routes';
import {MainComponent} from './main.component';
import {AccountsRoutes} from './+accounts/accounts.routes';

export const PrivateAppRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      ...CustomerRoutes,
      ...AccountsRoutes,
      { path: '', redirectTo: 'customers', pathMatch: 'full' }
    ]
  }
];



