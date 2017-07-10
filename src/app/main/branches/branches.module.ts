import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ng2';
import { SharedModule } from '../../shared/shared.module';
import { BranchesRoutingModule, BRANCHES_MODULE_DECLARATIONS } from './branches-routing.module';
import { OChartModule } from 'ontimize-web-ng2-charts';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OChartModule,
    BranchesRoutingModule
  ],
  declarations: BRANCHES_MODULE_DECLARATIONS,
  exports: BRANCHES_MODULE_DECLARATIONS
})
export class BranchesModule { }
