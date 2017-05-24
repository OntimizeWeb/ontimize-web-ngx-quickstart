import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ng2';
// import { NavigationBarService } from './navigation-bar.service';
import { SideMenuComponent } from './menu/side-menu.component';
import { BarMenuComponent } from './menu/bar-menu.component';

import { CommonModule } from '@angular/common';

// import { OChartModule } from 'ontimize-web-ng2-charts';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    SideMenuComponent,
    BarMenuComponent
  ],
  exports: [
    CommonModule,
    SideMenuComponent,
    BarMenuComponent
  ]
})
export class SharedModule { }
