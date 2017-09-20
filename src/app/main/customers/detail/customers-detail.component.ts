import {
  Injector,
  ViewChild,
  Component,
  OnInit,
  AfterContentInit
} from '@angular/core';

import {
  OFormComponent,
  OntimizeService,
  OListPickerComponent,
  OTableComponent,
  ORealPipe
} from 'ontimize-web-ng2';
import { Observable } from 'rxjs/Observable';
// import { ChartSeries } from 'ontimize-web-ng2-charts';

@Component({
  selector: 'customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit, AfterContentInit {
  protected realPipe: ORealPipe;
  protected customerAccountsData: Array<Object>;
  protected totalBalanceData: Array<Object>;
  protected service: OntimizeService;

  protected customerId: any;
  protected yAxis = 'MOVEMENT';
  protected xAxis = 'MOVEMENTTYPES';

  @ViewChild('accountsTable') accountsTable: OTableComponent;
  @ViewChild('oForm') form: OFormComponent;
  @ViewChild('accountListPicker') accountListPicker: OListPickerComponent;

  availableAccountsToAdd: Array<any> = [];

  constructor(protected injector: Injector) {
    this.realPipe = new ORealPipe(this.injector);
  }

  ngOnInit() {
    this.configureService();
  }

  protected configureService() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration();
    conf['path'] = '/customers';
    this.service.configureService(conf);
  }

  ngAfterContentInit() {
    this.form.onFormDataLoaded.subscribe(data => {
      if (data.hasOwnProperty('CUSTOMERID')) {
        this.customerId = data['CUSTOMERID'];
      }
      this.onChartData(data);
    }, error => {
      console.log(error);
    });
  }

  protected onChartData(data: Object) {
    if (data.hasOwnProperty('CUSTOMERID') && this.service) {
      const filter = {
        'CUSTOMERID': data['CUSTOMERID']
      };

      const columnsStr = 'ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;ACCOUNT;BALANCE;CUSTOMERID;STARTDATE;ENDDATE';
      const columns = columnsStr.split(';');
      this.service.query(filter, columns, 'customerAccount').subscribe((resp) => {
        if (resp.code === 0) {
          this.adaptResult(resp.data);
        } else {
          alert('Impossible to query data!');
        }
      });
    }
  }

  adaptResult(data: Array<any>) {
    if (data && data.length) {
      // this.customerAccountsData = this.processCustomerAccountsData(data);
    }
  }

  // processCustomerAccountsData(data: Array<Object>): Array<ChartSeries> {
  //   const values = [];
  //   const self = this;
  //   data.forEach((item: any, index: number) => {
  //     const val = {
  //       'x': item['ACCOUNT'],
  //       'y': Math.abs(item['BALANCE'])
  //     };
  //     values.push(val);
  //   });
  //   return values;
  // }

  onAddAccount() {
    (this.accountListPicker as any)._isReadOnly = false;
    const relatedAccountsIds = [];
    (this.accountsTable as any).dataArray.forEach(element => {
      relatedAccountsIds.push(element['ACCOUNTID']);
    });
    const accountFilter = {};
    accountFilter['@basic_expression'] = {
      lop: 'ACCOUNTID',
      op: 'NOT IN',
      rop: relatedAccountsIds
    };

    this.service.query(accountFilter,
      ['ACCOUNTID', 'ENTITYID', 'OFFICEID', 'CDID', 'ANID', 'BALANCE', 'ACCOUNTTYP'],
      'EAccounts').subscribe((resp) => {
        if (resp.code === 0) {
          resp.data.forEach(element => {
            element['ACCOUNT'] = element['ENTITYID'] + ' ' + element['OFFICEID'] + ' ' + element['CDID'] + ' ' + element['ANID'];
            element['BALANCE'] = this.realPipe.transform(element['BALANCE'], {
              grouping: true,
              decimalDigits: 2
            }) + '€';
          });
          this.availableAccountsToAdd = resp.data.filter(
            accountItem => (relatedAccountsIds.indexOf(accountItem['ACCOUNTID']) === -1));
          const self = this;
          setTimeout(function () {
            self.accountListPicker.onClickListpicker(null);
          }, 0);

        }
      });
  }

  onNewAccountSelected(accountId) {
    if (accountId && this.customerId) {
      this.service.insert({
        ACCOUNTID: accountId,
        CUSTOMERID: this.customerId
      }, 'ECustomerAccounts').subscribe((resp) => {
        this.accountsTable.reloadData();
      });
    }
  }


}
