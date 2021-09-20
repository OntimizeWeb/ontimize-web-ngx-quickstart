import { Component, ViewEncapsulation } from '@angular/core';
import { DonutChartConfiguration } from 'ontimize-web-ngx-charts';

import { DocsSiteTheme, ThemeService } from '../theme.service';

declare var d3: any;

@Component({
  selector: 'accounts-card',
  templateUrl: './accounts-card.component.html',
  styleUrls: ['./accounts-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.accounts-card]': 'true'
  }
})
export class AccountsCardComponent {

  public chartParameters: DonutChartConfiguration;

  constructor(
    private _themeService: ThemeService
  ) {
    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.legendPosition = 'right';
    this.chartParameters.legend.margin.top = 16;
    this.chartParameters.height = 150;
    this.chartParameters.margin.top = 0;
    this.chartParameters.margin.right = 0;
    this.chartParameters.margin.bottom = 0;
    this.chartParameters.margin.left = 0;
    this.chartParameters.labelType = 'value';
    this.chartParameters.labelSunbeamLayout = false;
    this.chartParameters.valueType = 'intGrouped';
    this.chartParameters.showTooltip = false;
    const theme: DocsSiteTheme = this._themeService.getStoredTheme();

    theme.primary = theme.primary.replace('#', '');
    let splitColor = theme.primary.match(/.{1,2}/g).map(function (hex) { return parseInt(hex, 16); });
    this.chartParameters.color = [theme.accent, '#eeeeee', '#c5c5c5', 'rgba(' + splitColor[0] + ', ' + splitColor[1] + ', ' + splitColor[2] + ', 0.3)'];

    if (theme.isDark) {
      this.chartParameters.callback = () => {
        d3.selectAll('.accounts-card-chart .nv-pieLabels text').style('fill', '#cccccc');
        d3.selectAll('.accounts-card-chart .nv-legend-text').style('fill', '#cccccc');
      };
    }
  }

}
