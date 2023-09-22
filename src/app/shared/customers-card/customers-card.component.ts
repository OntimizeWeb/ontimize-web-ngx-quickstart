import { Component, ViewEncapsulation } from '@angular/core';
import { MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

import { DocsSiteTheme, ThemeService } from '../theme.service';

declare var d3: any;

@Component({
  selector: 'customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.customers-card]': 'true'
  }
})
export class CustomersCardComponent {

  public chartParameters: MultiBarHorizontalChartConfiguration;
  scheme;
  constructor(
    private _themeService: ThemeService
  ) {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.showLegend = false;
    this.chartParameters.height = 150;
    this.chartParameters.width = 250;
    this.chartParameters.showControls = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters.showYAxis = true;
    this.chartParameters.showXAxis = false;
    this.chartParameters.margin.top = 0;
    this.chartParameters.margin.right = 0;
    this.chartParameters.margin.bottom = 0;
    this.chartParameters.margin.left = 60;
    this.chartParameters.yDataType = 'intGrouped';
    this.chartParameters.valueType = 'intGrouped';
    this.chartParameters.showTooltip = false;
    const theme: DocsSiteTheme = this._themeService.getStoredTheme();

    theme.primary = theme.primary.replace('#', '');
    this.scheme = { domain: ['#eeeeee', theme.accent, '#c5c5c5'] };

    if (theme.isDark) {
      this.chartParameters.callback = () => {
        d3.selectAll('.customers-card-chart .nv-axis text').style('fill', '#cccccc');
        d3.selectAll('.customers-card-chart .nv-groups text').style('fill', '#cccccc');
      };
    }
  }

}
