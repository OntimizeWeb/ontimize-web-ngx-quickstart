import { ViewEncapsulation, Component, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { IExpression, FilterExpressionUtils, OListComponent, Util, Codes, IFilterBuilderCmpTarget, OTextInputComponent, OFormComponent, IFormDataComponent } from 'ontimize-web-ngx';
import { MatSidenav } from '@angular/material';

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

  @ViewChild('sidenav')
  private sidenav: MatSidenav;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  createFilter(values: Array<{ attr, value }>): IExpression {

    let filters = [];
    values.forEach(fil => {
      if (fil.value) {

        if (fil.attr === 'ENTITYID' || fil.attr === 'OFFICEID' || fil.attr === 'ANID') {
          filters.push(FilterExpressionUtils.buildExpressionLike(fil.attr, fil.value));
        }

        if (fil.attr === 'ACCOUNTTYPEID') {
          filters.push(FilterExpressionUtils.buildExpressionEquals(fil.attr, fil.value));
        }

        //startdate
        if (fil.attr === 'STARTDATE') {
          filters.push(FilterExpressionUtils.buildExpressionMoreEqual(fil.attr, fil.value));
        }

        //startdate
        if (fil.attr === 'ENDDATE') {
          filters.push(FilterExpressionUtils.buildExpressionLessEqual(fil.attr, fil.value));
        }

        //balance
        if (fil.attr === 'BALANCE') {
          filters.push(FilterExpressionUtils.buildExpressionLessEqual(fil.attr, fil.value));
        }
      }

    });
    let ce: IExpression;
    if (filters.length > 0) {
      ce = filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
    }

    return ce;
    // this.listAccount.queryData(FilterExpressionUtils.buildBasicExpression(ce), { sqltypes: { STARTDATE: 93, ENDDATE: 93, ACCOUNTTYPEID: 4, BALANCE: 8 } });

  }

  reloadData() {
    this.listAccount.reloadData();
  }

  clearFilterAccounts() {
    let inputs: Object = this.formFilter.getComponents();

    let self = this;
    Object.keys(inputs).forEach((x: any) => {
      self.formFilter.clearFieldValue(x);
    }
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

  toogleSidenav() {
    this.sidenav.toggle()
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
