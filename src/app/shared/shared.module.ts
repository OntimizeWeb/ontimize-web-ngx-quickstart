import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { OReportModule } from 'ontimize-web-ngx-report-on-demand';

import { MENU_COMPONENTS } from './app.menu.config';
import { MovementTypesCellRendererComponent } from './movement-types-renderer/movement-types-cell-renderer';

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
  exports: [
    CommonModule,
    MovementTypesCellRendererComponent,
    ...MENU_COMPONENTS
  ],
  entryComponents: [...MENU_COMPONENTS]
})
export class SharedModule { }
