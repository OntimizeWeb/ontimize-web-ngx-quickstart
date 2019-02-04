import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { StyleManager } from '../shared/style-manager/style-manager';
import { ThemeService } from '../shared/theme.service';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    MainRoutingModule,
    OntimizeWebModule,
    SharedModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    StyleManager,
    ThemeService
  ]
})
export class MainModule { }
