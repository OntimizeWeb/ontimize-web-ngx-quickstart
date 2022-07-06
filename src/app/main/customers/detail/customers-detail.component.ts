import { Injector, ViewChild, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OntimizeService, OListPickerComponent, OTableComponent, ORealPipe, ONIFInputComponent } from 'ontimize-web-ngx';
import { OReportStoreService } from 'ontimize-web-ngx-report';

@Component({
  selector: 'customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.customers-detail]': 'true'
  }
})
export class CustomersDetailComponent implements OnInit {

  protected realPipe: ORealPipe;
  protected customerAccountsData: Array<Object>;
  protected totalBalanceData: Array<Object>;
  protected service: OntimizeService;

  protected customerId: any;
  protected yAxis = 'MOVEMENT';
  protected xAxis = 'MOVEMENTTYPES';

  public params: object;

  @ViewChild('accountsTable', { static: false }) accountsTable: OTableComponent;
  @ViewChild('oDetailForm', { static: false }) form: OFormComponent;
  @ViewChild('accountListPicker', { static: false }) accountListPicker: OListPickerComponent;
  @ViewChild('id', { static: false }) id: ONIFInputComponent;

  availableAccountsToAdd: Array<any> = [];

  constructor(protected injector: Injector,
    private reportStoreService: OReportStoreService) {
    this.service = this.injector.get(OntimizeService);
    this.realPipe = new ORealPipe(this.injector);
  }

  ngOnInit() {
    this.configureService();
  }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration();
    conf['path'] = '/customers';
    this.service.configureService(conf);
  }


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
              minDecimalDigits: 2,
              maxDecimalDigits: 2
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

  onDataLoaded(e: object) {
    this.params = this.getParameters();
  }

  getParameters() {
    let params = {
      'id': this.id.getValue()
    }

    return params;
  }

  fillReport(e: Event) {
    this.reportStoreService.openFillReport("6e1439f4-9b76-4d2d-ae73-6797682078c9", this.params, {});
  }

}
