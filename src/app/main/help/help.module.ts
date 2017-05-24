import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent
  ]
})
export class HelpModule { }
