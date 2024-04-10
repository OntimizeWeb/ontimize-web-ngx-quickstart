import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OReportRoutingModule } from 'ontimize-web-ngx-report';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    OReportRoutingModule
  ]
})
export class ReportsModule { }
