import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { OREPORT_PROVIDERS, OReportModule } from 'ontimize-web-ngx-report';

import { MENU_COMPONENTS } from './app.menu.config';
import { MovementTypesCellRendererComponent } from './movement-types-renderer/movement-types-cell-renderer';
import { OReportModule } from 'ontimize-web-ngx-report';

@NgModule({
  imports: [
    OntimizeWebModule,
    OChartModule,
    OReportModule
  ],
  declarations: [
    MovementTypesCellRendererComponent,
    ...MENU_COMPONENTS
  ],
  providers: [
    ...OREPORT_PROVIDERS
  ],
  exports: [
    CommonModule,
    OReportModule,
    MovementTypesCellRendererComponent,
    ...MENU_COMPONENTS
  ],
  entryComponents: [...MENU_COMPONENTS]
})
export class SharedModule { }
