import { NgModule } from '@angular/core';
import { Injector, APP_INITIALIZER } from '@angular/core';

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule,
  O_MAT_ERROR_OPTIONS,
  O_INPUTS_OPTIONS
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Defining custom providers (if needed)...
export const customProviders: any = [
  { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } },
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } }
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }
