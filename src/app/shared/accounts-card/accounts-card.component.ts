import { Component, ViewEncapsulation } from '@angular/core';
import { PieChartConfiguration, DonutChartConfiguration } from 'ontimize-web-ngx-charts';

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

  constructor() {
    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.legendPosition = 'right';
    this.chartParameters.height = 150;
    this.chartParameters.margin.top = 0;
    this.chartParameters.margin.right = 0;
    this.chartParameters.margin.bottom = 0;
    this.chartParameters.margin.left = 0;
    this.chartParameters.color = ['#ffcc00', '#eeeeee', '#c5c5c5', '#242424'];
    this.chartParameters.labelType = 'value';
    this.chartParameters.labelSunbeamLayout = false;
    this.chartParameters.valueType = 'intGrouped';
    this.chartParameters.showTooltip = false;
  }

}
