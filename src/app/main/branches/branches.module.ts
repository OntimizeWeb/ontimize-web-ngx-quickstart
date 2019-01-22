import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OMapModule } from 'ontimize-web-ngx-map';

import { SharedModule } from '../../shared/shared.module';
import { BRANCHES_MODULE_DECLARATIONS, BranchesRoutingModule } from './branches-routing.module';

@NgModule({
  imports: [
    BranchesRoutingModule,
    OMapModule,
    OntimizeWebModule,
    SharedModule
  ],
  declarations: BRANCHES_MODULE_DECLARATIONS,
  exports: BRANCHES_MODULE_DECLARATIONS
})
export class BranchesModule { }
