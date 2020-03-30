import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BranchesDetailComponent } from './detail/branches-detail.component';
import { BranchesEditComponent } from './edit/branches-edit.component';
import { BranchesHomeComponent } from './home/branches-home.component';

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
  { path: ':OFFICEID/accounts', loadChildren: () => import('../accounts/accounts.module').then(m => m.AccountsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
