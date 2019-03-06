import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { ChartSeries, LinePlusBarFocusChartConfiguration, PieChartConfiguration } from 'ontimize-web-ngx-charts';

import { D3LocaleService } from '../../../shared/d3-locale/d3Locale.service';

declare var d3: any;

@Component({
  selector: 'accounts-detail',
  styleUrls: ['./accounts-detail.component.scss'],
  templateUrl: './accounts-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.accounts-detail]': 'true'
  }
})
export class AccountsDetailComponent {

  private static colorSalary: string = '#92b558';
  private static colorDebit: string = '#951630';
  private static colorTransfer: string = '#f2552c';
  private static colorCash: string = '#424476';
  private static colorBalance: string = '#2196f3';

  public formLabel: string;
  public avgBalance: number;

  public lineData: ChartSeries[];

  public balanceChartParams: LinePlusBarFocusChartConfiguration;
  public movementTypesChartParams: PieChartConfiguration;

  @ViewChild('oForm')
  private oForm: OFormComponent;

  constructor(
    private ontimizeService: OntimizeService,
    private translateService: OTranslateService,
    private d3LocaleService: D3LocaleService
  ) {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineBarChart(d3Locale);
    this._configurePieChart(d3Locale);
  }

  public onFormDataLoaded(data: any): void {
    this.formLabel = data.ACCOUNTTYP;

    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('movements'));
    if (data.hasOwnProperty('ACCOUNTID') && this.ontimizeService !== null) {
      const filter = {
        ACCOUNTID: data.ACCOUNTID
      };
      const columns = ['MOVEMENT', 'DATE_', 'MOVEMENTTYPEID'];
      this.ontimizeService.query(filter, columns, 'movement', { ACCOUNTID: 4 }).subscribe(resp => {
        if (resp.code === 0) {
          this.processLineData(resp.data);
        } else {
          console.error(resp);
        }
      });
    }
  }

  private processLineData(data: any[]): void {
    if (data && data.length) {
      const balanceSerie: ChartSeries = {
        key: this.translateService.get('BALANCE'),
        values: []
      };

      const movementSerie: ChartSeries = {
        bar: true,
        key: this.translateService.get('MOVEMENT'),
        values: []
      };

      let avgBalance = data[0] ? data[0].MOVEMENT : 0;
      let balance = data[0] ? data[0].MOVEMENT : 0;
      data.forEach((item: any, i: number) => {
        if (i !== 0) {
          balance = this._increment(balance, item.MOVEMENT);
        }

        let color: string;
        switch (item.MOVEMENTTYPEID) {
          case 1:
            color = AccountsDetailComponent.colorTransfer;
            break;
          case 2:
            color = AccountsDetailComponent.colorCash;
            break;
          case 3:
            color = AccountsDetailComponent.colorSalary;
            break;
          case 4:
            color = AccountsDetailComponent.colorDebit;
            break;
        }

        avgBalance += balance;
        const date = new Date(item.DATE_);
        balanceSerie.values.push({ x: date, y: balance });
        movementSerie.values.push({ x: date, y: item.MOVEMENT, color: color });
      });

      this.avgBalance = avgBalance / data.length;
      this.lineData = [balanceSerie, movementSerie];
    }
  }

  private _increment(val1: number, val2: number): number {
    return (parseInt(Number(val1 * 100).toFixed(2)) + parseInt(Number(val2 * 100).toFixed(2))) / 100;
  }

  private _configureLineBarChart(locale: any): void {
    this.balanceChartParams = new LinePlusBarFocusChartConfiguration();
    this.balanceChartParams.margin.top = 20;
    this.balanceChartParams.margin.right = 80;
    this.balanceChartParams.margin.bottom = 20;
    this.balanceChartParams.margin.left = 80;
    this.balanceChartParams.focusEnable = false;
    this.balanceChartParams.color = [AccountsDetailComponent.colorBalance];
    this.balanceChartParams.yDataType = locale.numberFormat('$,f');
    this.balanceChartParams.y1Axis.showMaxMin = false;
    this.balanceChartParams.xDataType = d => locale.timeFormat('%d %b %Y')(new Date(d));
    this.balanceChartParams.x1Axis.tickPadding = 10;
    this.balanceChartParams.y1Axis.tickPadding = 10;
    this.balanceChartParams.legend.margin.top = 2;
    this.balanceChartParams.legend.margin.right = 0;
    this.balanceChartParams.legend.margin.bottom = 2;
    this.balanceChartParams.legend.margin.left = 0;
  }

  private _configurePieChart(locale: any): void {
    this.movementTypesChartParams = new PieChartConfiguration();
    this.movementTypesChartParams.margin.top = 0;
    this.movementTypesChartParams.margin.right = 0;
    this.movementTypesChartParams.margin.bottom = 0;
    this.movementTypesChartParams.margin.left = 0;
    this.movementTypesChartParams.legendPosition = 'bottom';
    this.movementTypesChartParams.legend.vers = 'furious';
    this.movementTypesChartParams.legend.width = '150';
    this.movementTypesChartParams.labelType = 'value';
    this.movementTypesChartParams.valueType = locale.numberFormat('$,.2f');
    this.movementTypesChartParams.colorData = [{
      value: 'Salary',
      color: AccountsDetailComponent.colorSalary
    },
    {
      value: 'Direct debit',
      color: AccountsDetailComponent.colorDebit
    },
    {
      value: 'Transfer',
      color: AccountsDetailComponent.colorTransfer
    },
    {
      value: 'Automatic Cash',
      color: AccountsDetailComponent.colorCash
    }];
  }

}
