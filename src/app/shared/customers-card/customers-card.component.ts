import { Component, ViewEncapsulation } from '@angular/core';
import { MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

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

  constructor() {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.showLegend = false;
    this.chartParameters.showControls = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters.margin.top = 0;
    this.chartParameters.margin.right = 0;
    this.chartParameters.margin.bottom = 0;
    this.chartParameters.margin.left = 60;
    this.chartParameters.color = ['#ffcc00', '#c5c5c5', '#242424'];
    this.chartParameters.yDataType = 'intGrouped';
    this.chartParameters.valueType = 'intGrouped';
    this.chartParameters.showTooltip = false;
  }

}
