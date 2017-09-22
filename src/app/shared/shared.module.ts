import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { CommonModule } from '@angular/common';
import { MovementTypesCellRendererComponent } from './movement-types-cell-renderer';


@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    MovementTypesCellRendererComponent
  ],
  exports: [
    CommonModule,
    MovementTypesCellRendererComponent
  ]
})
export class SharedModule { }
