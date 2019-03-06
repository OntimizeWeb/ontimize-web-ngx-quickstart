import { NgModule } from '@angular/core';
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule, O_MAT_ERROR_OPTIONS, O_INPUTS_OPTIONS } from 'ontimize-web-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { D3LocaleService } from './shared/d3-locale/d3Locale.service';
import { StyleManager } from './shared/style-manager/style-manager';
import { ThemeService } from './shared/theme.service';

// Defining custom providers (if needed)...
export const customProviders: any = [
  D3LocaleService,
  { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } },
  { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } },
  StyleManager,
  ThemeService
];

@NgModule({
  imports: [
    AppRoutingModule,
    ONTIMIZE_MODULES,
    OntimizeWebModule
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
