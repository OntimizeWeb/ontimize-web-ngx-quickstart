import { Component, ViewEncapsulation } from '@angular/core';
import { DonutChartConfiguration } from 'ontimize-web-ngx-charts';

import { Constants } from '../constant';

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
  scheme;
  constructor( ) {
    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.width = 280;
    this.chartParameters.height = 200;
    this.chartParameters.showLeyend = false;
    this.chartParameters.margin.top = 0;
    this.chartParameters.margin.right = 0;
    this.chartParameters.margin.bottom = 0;
    this.chartParameters.margin.left = 0;
    this.chartParameters.labelType = 'value';
    this.chartParameters.labelSunbeamLayout = false;
    this.chartParameters.valueType = 'intGrouped';
    this.chartParameters.showTooltip = false;


    let primary = Constants.THEME.primary.replace('#', '');
    let splitColor = primary.match(/.{1,2}/g).map(function (hex) { return parseInt(hex, 16); });
    this.scheme = { domain: [Constants.THEME.accent, '#eeeeee', '#c5c5c5', 'rgba(' + splitColor[0] + ', ' + splitColor[1] + ', ' + splitColor[2] + ', 0.3)'] };

  }

}
