import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            }, {
                path: 'about',
                loadChildren: './about/about.module#AboutModule'
            }, {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsModule'
            }, {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule'
            }, {
                path: 'accounts',
                loadChildren: './accounts/accounts.module#AccountsModule'
            }, {
                path: 'branches',
                loadChildren: './branches/branches.module#BranchesModule'
            }, {
                path: 'employees',
                loadChildren: './employees/employees.module#EmployeesModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
