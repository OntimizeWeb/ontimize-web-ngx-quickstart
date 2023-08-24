import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main',
    canActivate: [AuthGuardService],
    // canActivateChild: [PermissionsGuardService],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

const opt = {
  enableTracing: false
  // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
