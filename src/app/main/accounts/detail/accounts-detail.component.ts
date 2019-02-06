import { Component, forwardRef, Injector, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OListComponent, OListPickerComponent, OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { ChartSeries, DonutChartConfiguration, StackedAreaChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'accounts-detail',
  styleUrls: ['./accounts-detail.component.scss'],
  templateUrl: './accounts-detail.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountsDetailComponent implements OnInit {

  public data: Array<Object>;
  public lineData: Array<ChartSeries>;
  protected service: OntimizeService;
  protected translateService: OTranslateService;

  protected accountId;
  protected yAxis = 'MOVEMENT';
  protected xAxis = 'MOVEMENTTYPES';
  public formLabel = '';
  public ibanLabel = '';

  @ViewChild(forwardRef(() => OFormComponent)) form: OFormComponent;
  @ViewChild('customerListPicker') customerListPicker: OListPickerComponent;
  @ViewChild('customerList') customerList: OListComponent;

  chartParameters: DonutChartConfiguration;
  chartParametersStackedArea: StackedAreaChartConfiguration;

  availableCustomersToAdd: Array<any> = [];

  constructor(
    protected injector: Injector
  ) {
    this.translateService = this.injector.get(OTranslateService);
    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.legendPosition = 'right';

    this.chartParametersStackedArea = new StackedAreaChartConfiguration();
    this.chartParametersStackedArea.showControls = false;
    // this.chartParametersStackedArea.useInteractiveGuideline= true;
    this.chartParametersStackedArea.color = ['#FF0000', '#00FF00'];
  }

  ngOnInit(): void {
    this.configureService();
  }

  onFormDataLoaded(data: any): void {
    if (data.hasOwnProperty('ACCOUNTID')) {
      this.accountId = data['ACCOUNTID'];
    }
    this.onChartData(data);
    this.formLabel = data['ACCOUNTTYP'];
    this.ibanLabel = data['ENTITYID'] + '-' + data['OFFICEID'] + '-' + data['CDID'] + '-' + data['ANID'];
  }

  protected configureService(): void {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration();
    conf['path'] = '/movements';
    this.service.configureService(conf);
  }

  protected onChartData(data: Object): void {
    if (data.hasOwnProperty('ACCOUNTID') && this.service !== null) {
      const filter = {
        ACCOUNTID: data['ACCOUNTID']
      };
      const columns = [this.yAxis, this.xAxis, 'DATE_'];
      this.service.query(filter, columns, 'movement').subscribe(resp => {
        if (resp.code === 0) {
          this.adaptResult(resp.data);
        } else {
          alert('Impossible to query data!');
        }
      });
    }
  }

  /**
   * Creates chart data grouping movements by category 'Movement type'
   */
  adaptResult(data: Array<any>): void {
    if (data && data.length) {
      this.data = this.processValues(data);
      this.lineData = this.processLineData(data);
    }
  }

  processLineData(data: Array<Object>): Array<ChartSeries> {
    const balanceSerie: ChartSeries = {
      key: 'BALANCE',
      values: []
    };

    const movementSerie: ChartSeries = {
      key: 'MOVEMENT',
      values: []
    };

    let balance = 0;
    const self = this;
    data.forEach((item: any) => {
      balance += item['MOVEMENT'];
      balanceSerie.values.push({ x: item['DATE_'], y: balance });
      movementSerie.values.push({ x: item['DATE_'], y: item['MOVEMENT'] });
    });
    const val = [];
    val.push(balanceSerie);
    val.push(movementSerie);
    return val;
  }

  processValues(data: Array<Object>): Array<Object> {
    const values = [];
    const self = this;
    data.forEach((item: any, index: number) => {
      const itemLabel = this.translateService.get(item[self.xAxis]);
      const filtered = self.filterCategory(itemLabel, values);
      if (filtered && filtered.length === 0) {
        values.push({ x: itemLabel, y: Math.abs(item[self.yAxis]) });
      } else {
        filtered[0]['y'] += Math.abs(item[self.yAxis]);
      }
    });
    return values;
  }

  filterCategory(category: string, values: Array<Object>): any[] {
    let filtered = [];
    if (values && values.length) {
      filtered = values.filter((val: Object) => {
        if (val['x'] === category) {
          return true;
        }
      });
    }
    return filtered;
  }

  onTableDataChange(args): void {
    console.log('onTableDataChange');
  }

  onAddCustomerClick(): void {
    (this.customerListPicker as any)._isReadOnly = false;
    const relatedCustomersIds = [];
    (this.customerList as any).dataArray.forEach(element => {
      relatedCustomersIds.push(element['CUSTOMERID']);
    });
    const customerFilter = {};
    customerFilter['@basic_expression'] = {
      lop: 'CUSTOMERID',
      op: 'NOT IN',
      rop: relatedCustomersIds
    };
    // this.service.query(customerFilter, ['ID', 'NAME', 'SURNAME'], 'ECustomers').subscribe((resp) => {
    //   if (resp.code === 0) {
    //     this.availableCustomersToAdd = resp.data.filter(
    //       customerItem => (relatedCustomersIds.indexOf(customerItem['CUSTOMERID']) === -1));
    //     const self = this;
    //     setTimeout(function () {
    //       self.customerListPicker.onClickListpicker(null);
    //     }, 0);
    //   }
    // });
  }

  onNewCustomerSelected(customerId): void {
    if (customerId && this.accountId) {
      this.service.insert({
        ACCOUNTID: this.accountId,
        CUSTOMERID: customerId
      }, 'ECustomerAccounts').subscribe(resp => {
        this.customerList.reloadData();
      });
    }
  }

  onRemoveCustomerClick(customerData): void {
    if (customerData && customerData['CUSTOMERACCOUNTID'] !== undefined) {
      this.service.delete({
        CUSTOMERACCOUNTID: customerData['CUSTOMERACCOUNTID']
      }, 'ECustomerAccounts').subscribe(resp => {
        this.customerList.reloadData();
      });
    }
  }

}
