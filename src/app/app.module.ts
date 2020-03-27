import { NgModule } from '@angular/core';
import {
  APP_CONFIG,
  O_INPUTS_OPTIONS,
  O_MAT_ERROR_OPTIONS,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule,
} from 'ontimize-web-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';

// Defining custom providers (if needed)...
export const customProviders: any = [
  { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } },
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
