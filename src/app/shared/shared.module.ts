import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { CommonModule } from '@angular/common';
import {ODateInputModule2} from '../shared/date-input/o-date-input.component';

import { MovementTypesCellRendererComponent } from './movement-types-cell-renderer';


@NgModule({
  imports: [
    OntimizeWebModule,
    ODateInputModule2
  ],
  declarations: [
    MovementTypesCellRendererComponent
  ],
  exports: [
    CommonModule,
    MovementTypesCellRendererComponent,
    ODateInputModule2
  ]
})
export class SharedModule { }
