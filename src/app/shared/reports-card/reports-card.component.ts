import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';
import { ReportService } from 'ontimize-web-ngx-report';
import { DocsSiteTheme, ThemeService } from '../theme.service';

declare var d3: any;

@Component({
  selector: 'reports-card',
  templateUrl: './reports-card.component.html',
  styleUrls: ['./reports-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.reports-card]': 'true'
  },
  providers: [ReportService]
})
export class ReportsCardComponent {

  public chartParameters: MultiBarHorizontalChartConfiguration;
  public accounts: number;
  public branches: number;
  public customers: number;
  public employees: number;
  public data: object[];

  constructor(
    private _themeService: ThemeService,
    private reportService: ReportService,
    private cd: ChangeDetectorRef) {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.showLegend = false;
    this.chartParameters.showControls = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
    this.chartParameters.margin.top = 0;
    this.chartParameters.margin.right = 0;
    this.chartParameters.margin.bottom = 0;
    this.chartParameters.margin.left = 80;
    this.chartParameters.yDataType = 'intGrouped';
    this.chartParameters.valueType = 'intGrouped';
    this.chartParameters.showTooltip = false;
    const theme: DocsSiteTheme = this._themeService.getStoredTheme();
    this.chartParameters.color = [theme.accent, '#c5c5c5', '#eeeeee', theme.primary];
    if (theme.isDark) {
      this.chartParameters.callback = () => {
        d3.selectAll('.reports-card-chart .nv-axis text').style('fill', '#cccccc');
        d3.selectAll('.reports-card-chart .nv-groups text').style('fill', '#cccccc');
      };
    }
    this.reportService.configureService(this.reportService.getDefaultServiceConfiguration('reports'));
    this.reportService.query({}, [], 'listReports').subscribe(
      res => {
        if (res.data && res.data.length) {
          this.accounts = res.data.filter((e: any) => e['REPORT_TYPE'].includes("Accounts")).length;
          this.branches = res.data.filter((e: any) => e['REPORT_TYPE'].includes("Branches")).length;
          this.customers = res.data.filter((e: any) => e['REPORT_TYPE'].includes("Customers")).length;
          this.employees = res.data.filter((e: any) => e['REPORT_TYPE'].includes("Employees")).length;
          this.data = [{
            'color': '#3498db',
            'key': 'type',
            'values': [{
              'key': 'type',
              'label': 'Accounts',
              'series': 0,
              'value': this.accounts
            },{
              'key': 'type',
              'label': 'Branches',
              'series': 0,
              'value': this.branches
            },{
              'key': 'type',
              'label': 'Customers',
              'series': 0,
              'value': this.customers
            },{
              'key': 'type',
              'label': 'Employees',
              'series': 0,
              'value': this.employees
            }]
          }]
        }

        },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }


}
