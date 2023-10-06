import { Component, ViewEncapsulation } from '@angular/core';
import { OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { ChartSeries, LinePlusBarFocusChartConfiguration, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { OReportStoreService } from 'ontimize-web-ngx-report';
import { Constants } from '../../../shared/constant';

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
  scheme;
  private static colorSalary: string = '#eeeeee';
  private static colorDebit: string;
  private static colorTransfer: string = '#c5c5c5';
  private static colorCash: string;
  private static colorBalance: string;

  public formLabel: string;
  public avgBalance: number;

  public lineData: ChartSeries[];

  public balanceChartParams: LinePlusBarFocusChartConfiguration;
  public movementTypesChartParams: PieChartConfiguration;

  public id: string;

  public mov_date: Date;
  public mov_type: number;
  public last_mov: number;

  constructor(
    private ontimizeService: OntimizeService,
    private translateService: OTranslateService,
    private reportStoreService: OReportStoreService
  ) {

    //alpha 30
    AccountsDetailComponent.colorCash = Constants.THEME.primary + "4D";
    AccountsDetailComponent.colorBalance = Constants.THEME.accent;
    //alpha 60
    AccountsDetailComponent.colorDebit = Constants.THEME.primary + "99";


    let themePrimary = Constants.THEME.primary.replace('#', '');
    let splitColor = themePrimary.match(/.{1,2}/g).map(function (hex) { return parseInt(hex, 16); });
    this.scheme = { domain: [Constants.THEME.accent, '#eeeeee', '#c5c5c5', 'rgba(' + splitColor[0] + ', ' + splitColor[1] + ', ' + splitColor[2] + ', 0.3)'] };
    this._configurePieChart();

  }

  private getLastMovement() {
    const filter = {
      ACCOUNTID: this.id
    };
    const columns = ['DATE_', 'MOVEMENTTYPEID', 'MOVEMENT'];
    this.ontimizeService.query(filter, columns, 'movement', { ACCOUNTID: 4 }).subscribe(resp => {
      if (resp.code === 0) {
        this.mov_date = resp.data[resp.data.length - 1].DATE_;
        this.mov_type = resp.data[resp.data.length - 1].MOVEMENTTYPEID;
        this.last_mov = resp.data[resp.data.length - 1].MOVEMENT;
      } else {
        console.error(resp);
      }
    });
  }

  public onFormDataLoaded(data: any): void {
    this.formLabel = data.ACCOUNTTYP;
    this.id = data.ACCOUNTID;

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
    this.getLastMovement();
  }

  private processLineData(data: any[]): void {
    console.log(data);
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
    this.balanceChartParams.margin.bottom = 40;
    this.balanceChartParams.margin.left = 120;
    this.balanceChartParams.focusEnable = false;
    this.balanceChartParams.yDataType = locale.numberFormat('$,f');
    this.balanceChartParams.y1Axis.showMaxMin = false;
    this.balanceChartParams.xDataType = d => locale.timeFormat('%d %b %Y')(new Date(d));
    this.balanceChartParams.x1Axis.tickPadding = 10;
    this.balanceChartParams.y1Axis.tickPadding = 10;
    this.balanceChartParams.legend.margin.top = 0;
    this.balanceChartParams.legend.margin.right = 0;
    this.balanceChartParams.legend.margin.bottom = 0;
    this.balanceChartParams.legend.margin.left = 0;
  }

  private _configurePieChart(): void {
    this.movementTypesChartParams = new PieChartConfiguration();
    this.movementTypesChartParams.margin.top = 0;
    this.movementTypesChartParams.margin.right = 0;
    this.movementTypesChartParams.margin.bottom = 0;
    this.movementTypesChartParams.margin.left = 0;
    this.movementTypesChartParams.height = 320;
    this.movementTypesChartParams.showLeyend = false;
    this.movementTypesChartParams.labelType = 'value';
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
    },
    {
      value: 'Banking fees',
      color: AccountsDetailComponent.colorBalance
    }];

  }

  getParameters() {
    const params = {
      'id': this.id
    }
    return params;
  }

  fillReport(e: Event) {
    const params = this.getParameters();
    this.reportStoreService.openFillReport("e34fd752-8093-4c86-a223-4004bc13ae0f", params, {});
  }

}
