import { Component, ViewEncapsulation } from '@angular/core';
import { MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

import { Constants } from '../constant';
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
  constructor(  ) {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.showLegend = false;
    this.chartParameters.height = 150;
    this.chartParameters.width = 250;
    this.chartParameters.showYAxis = true;
    this.chartParameters.showXAxis = false;
    this.chartParameters.yDataType = 'intGrouped';
    this.chartParameters.showTooltip = false;
    this.scheme = { domain: ['#eeeeee', Constants.THEME.accent, '#c5c5c5'] };
  }

}
