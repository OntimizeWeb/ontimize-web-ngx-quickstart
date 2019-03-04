import { ViewEncapsulation, Component, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { IExpression, FilterExpressionUtils, OListComponent, Util, Codes, IFilterBuilderCmpTarget, OTextInputComponent, OFormComponent, IFormDataComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'accounts-home',
  styleUrls: ['./accounts-home.component.scss'],
  templateUrl: './accounts-home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountsHomeComponent implements OnDestroy {


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  @ViewChild('listAccount')
  private listAccount: OListComponent;


  @ViewChild('formFilter')
  private formFilter: OFormComponent;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  filterAccounts() {

    let filters = [];
    //entity
    let entity = this.formFilter.getFieldReference('ENTITYID').getValue();
    if (Util.isDefined(entity) && entity!=='') {
      let beEntity = FilterExpressionUtils.buildExpressionLike('ENTITYID', entity);
      filters.push(beEntity);
    }

    //office
    let office = this.formFilter.getFieldReference('OFFICEID').getValue();
    if (Util.isDefined(office) && office!=='') {
      let beOfficeID = FilterExpressionUtils.buildExpressionLike('OFFICEID', office);
      filters.push(beOfficeID);
    }
    //control
    let cuenta = this.formFilter.getFieldReference('ANID').getValue();
    if (Util.isDefined(cuenta) && cuenta!=='') {
      let beANID = FilterExpressionUtils.buildExpressionLike('ANID', cuenta);
      filters.push(beANID);
    }
    //type
    let typ = this.formFilter.getFieldReference('ACCOUNTTYPEID').getValue();
    if (Util.isDefined(typ) &&  typ!=='') {
      let beACCOUNTTYP = FilterExpressionUtils.buildExpressionEquals('ACCOUNTTYPEID', typ);
      filters.push(beACCOUNTTYP);
    }

    //startdate
    let startDate = this.formFilter.getFieldReference('STARTDATE').getValue();
    if (Util.isDefined(startDate)) {
      let beSTARTDATE = FilterExpressionUtils.buildExpressionMoreEqual('STARTDATE', startDate);
      filters.push(beSTARTDATE);
    }

    //startdate
    let endDate = this.formFilter.getFieldReference('ENDDATE').getValue();
    if (Util.isDefined(endDate)) {
      let beENDDATE = FilterExpressionUtils.buildExpressionLess('ENDDATE', endDate);
      filters.push(beENDDATE);
    }

    //balance
    let balance = this.formFilter.getFieldReference('BALANCE').getValue();
    if (Util.isDefined(balance) && balance > 0) {
      let beBALANCE = FilterExpressionUtils.buildExpressionLessEqual('BALANCE', balance);
      filters.push(beBALANCE);
    }



    let ce: IExpression;
    if (filters.length > 0) {
      ce = filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
    }

    // console.log(filters);

    this.listAccount.queryData(FilterExpressionUtils.buildBasicExpression(ce), { sqltypes: { STARTDATE: 93, ENDDATE: 93, ACCOUNTTYPEID: 4, BALANCE: 8 } });

  }

  clearFilterAccounts(){
    let inputs:Object = this.formFilter.getComponents();
    console.log(inputs);
    // inputs.forEach(element) => {
    //   this.formFilter.clearFieldValue(element.attr);
    // });
    let self= this;
    Object.keys(inputs).forEach((x:any)=>{
      self.formFilter.clearFieldValue(x);}
      );
    this.listAccount.queryData({}, { sqltypes: { STARTDATE: 93, ENDDATE: 93, ACCOUNTTYPEID: 4, BALANCE: 8 } });
  }

  formatLabelSlider(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'K';
    }

    return value;
  }


}
