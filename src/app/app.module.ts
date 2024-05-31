import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  APP_CONFIG,
  O_INPUTS_OPTIONS,
  O_MAT_ERROR_OPTIONS,
  O_PERMISSION_SERVICE,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule,
} from 'ontimize-web-ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { D3LocaleService } from './shared/d3-locale/d3Locale.service';
import { StyleManager } from './shared/style-manager/style-manager';
import { ThemeService } from './shared/theme.service';
import { CustomPermissionsService } from './shared/custom-permission.service';

// Defining custom providers (if needed)...
export const customProviders: any = [
  D3LocaleService,
  StyleManager,
  ThemeService,
  { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } },
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } },
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  { provide: O_PERMISSION_SERVICE, useValue: CustomPermissionsService }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
