import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SettingsModule } from './settings/settings.module';
import { CustomersModule } from './customers/customers.module';
import { AccountsModule } from './accounts/accounts.module';
import { BranchesModule } from './branches/branches.module';
import { EmployeesModule } from './employees/employees.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadAboutModule() {
  return AboutModule;
}

export function loadSettingsModule() {
  return SettingsModule;
}

export function loadCustomersModule() {
  return CustomersModule;
}

export function loadAccountsModule() {
  return AccountsModule;
}

export function loadBranchesModule() {
  return BranchesModule;
}

export function loadEmployeesModule() {
  return EmployeesModule;
}

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'about', loadChildren: loadAboutModule },
      { path: 'settings', loadChildren: loadSettingsModule },
      { path: 'customers', loadChildren: loadCustomersModule },
      { path: 'accounts', loadChildren: loadAccountsModule },
      { path: 'branches', loadChildren: loadBranchesModule },
      { path: 'employees', loadChildren: loadEmployeesModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
