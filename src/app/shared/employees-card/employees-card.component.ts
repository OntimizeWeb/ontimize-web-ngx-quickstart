import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

import { DocsSiteTheme, ThemeService } from '../theme.service';

declare var d3: any;

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

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    private _themeService: ThemeService
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('employees'));
    this.ontimizeService.query(void 0, ['EMPLOYEEID'], 'employee').subscribe(
      res => this.employeesAmount = (res.data && res.data.length) ? res.data.length : void 0,
      err => console.log(err),
      () => this.cd.detectChanges()
    );

    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.height = 60;
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
    this.chartParameters.showTooltip = false;
    const theme: DocsSiteTheme = this._themeService.getStoredTheme();
    this.chartParameters.color = [theme.accent, '#c5c5c5', theme.primary];
    if (theme.isDark) {
      this.chartParameters.callback = () => {
        d3.selectAll('.employees-card-chart .nv-axis text').style('fill', '#cccccc');
        d3.selectAll('.employees-card-chart .nv-groups text').style('fill', '#cccccc');
      };
    }
  }

}
