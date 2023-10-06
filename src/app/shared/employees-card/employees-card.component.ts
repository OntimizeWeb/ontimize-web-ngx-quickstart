import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

import { Constants } from '../constant';

@Component({
  selector: 'employees-card',
  templateUrl: './employees-card.component.html',
  styleUrls: ['./employees-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.employees-card]': 'true'
  }
})
export class EmployeesCardComponent {

  public employeesAmount: number;
  public chartParameters: MultiBarHorizontalChartConfiguration;
  scheme;
  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('employees'));
    this.ontimizeService.query(void 0, ['EMPLOYEEID'], 'employee').subscribe(
      res => this.employeesAmount = (res.data && res.data.length) ? res.data.length : void 0,
      err => console.log(err),
      () => this.cd.detectChanges()
    );

    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.height = 100;
    this.chartParameters.width = 260;
    this.chartParameters.showLegend = false;
    this.chartParameters.showControls = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters.margin.top = 0;
    this.chartParameters.margin.right = 0;
    this.chartParameters.margin.bottom = 0;
    this.chartParameters.margin.left = 70;
    this.chartParameters.yDataType = 'intGrouped';
    this.chartParameters.valueType = 'intGrouped';
    this.chartParameters.showXAxis = false;
    this.chartParameters.showYAxis = true;
    this.chartParameters.showTooltip = false;
    this.scheme = {
      domain: [Constants.THEME.accent, '#c5c5c5', Constants.THEME.primary]
    };
  }

}
