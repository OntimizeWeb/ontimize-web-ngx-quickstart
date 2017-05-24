import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';

import { MainModule } from './main/main.module';
import { AboutModule } from './main/about/about.module';
import { HelpModule } from './main/help/help.module';
import { HomeModule } from './main/home/home.module';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'prefix' },
  // {
  //   path: 'main',
  //   loadChildren: () => MainModule
  // },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'about',
    loadChildren: () => AboutModule
  },
  {
    path: 'help',
    loadChildren: () => HelpModule
  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  }
];

const opt = {
  enableTracing: true
  // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
