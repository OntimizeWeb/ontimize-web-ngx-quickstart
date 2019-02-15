import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
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
  ]
})
export class MainModule { }
