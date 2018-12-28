import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchesDetailComponent } from './detail/branches-detail.component';
import { BranchesEditComponent } from './edit/branches-edit.component';
import { BranchesHomeComponent } from './home/branches-home.component';
import { AccountsModule } from '../accounts/accounts.module';

export function loadAccountsModule() {
  return AccountsModule;
}

export const BRANCHES_MODULE_DECLARATIONS = [
  BranchesDetailComponent,
  BranchesEditComponent,
  BranchesHomeComponent
];

export const routes: Routes = [
  { path: '', component: BranchesHomeComponent },
  { path: 'new', component: BranchesEditComponent },
  {
    path: ':OFFICEID', component: BranchesDetailComponent,
    data: {
      oPermission: {
        permissionId: 'branch-detail-permissions',
        // restrictedPermissionsRedirect: '/main/customers'
        restrictedPermissionsRedirect: '403'
      }
    }
  },
  { path: ':OFFICEID/edit', component: BranchesEditComponent },
  { path: ':OFFICEID/accounts', loadChildren: loadAccountsModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
