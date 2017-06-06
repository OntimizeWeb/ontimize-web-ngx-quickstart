import { NgModule, NgModuleFactory } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutModule } from './main/about/about.module';
import { HelpModule } from './main/help/help.module';
import { HomeModule } from './main/home/home.module';

import { AppComponent } from './app.component';

export function loadAboutModule() {
  return AboutModule;
}

export function loadHelpModule() {
  return HelpModule;
}

export function loadHomeModule() {
  return HomeModule;
}

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'prefix' },
  {
    path: 'about',
    loadChildren: loadAboutModule
  },
  {
    path: 'help',
    loadChildren: loadHelpModule
  },
  {
    path: 'home',
    loadChildren: loadHomeModule
  }
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
