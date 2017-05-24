import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  ontimizeProviders
  // ,
  // OntimizeWebModule
} from 'ontimize-web-ng2';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
// import {
//   OChartModule,
//   chartsProviders
// } from 'ontimize-web-ng2-charts/o-chart';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';

const standardProviders = [
  ontimizeProviders({
    config: CONFIG
  })
  // ,
  // chartsProviders()
];

// Defining custom providers (if needed)
const customProviders = [
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // SharedModule,
    // OChartModule,
    // LoginModule,
    MainModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...standardProviders,
    ...customProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }