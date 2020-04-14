import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
import { D3LocaleService } from './shared/d3-locale/d3Locale.service';
import { StyleManager } from './shared/style-manager/style-manager';
import { ThemeService } from './shared/theme.service';

// Defining custom providers (if needed)...
export const customProviders: any = [
  D3LocaleService,
  StyleManager,
  ThemeService,
  { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } },
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } }
];


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
