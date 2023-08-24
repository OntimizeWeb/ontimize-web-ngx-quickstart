import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FilterExpressionUtils, Expression, OFormComponent, OListComponent, OFilterBuilderComponent } from 'ontimize-web-ngx';
import { OReportStoreService } from 'ontimize-web-ngx-report';

@Component({
  selector: 'accounts-home',
  styleUrls: ['./accounts-home.component.scss'],
  templateUrl: './accounts-home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountsHomeComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  @ViewChild('listAccount', { static: false })
  private listAccount: OListComponent;

  @ViewChild('formFilter', { static: false })
  private formFilter: OFormComponent;

  @ViewChild('filterBuilder', { static: false })
  private filterBuilder: OFilterBuilderComponent;

  @ViewChild('sidenav', { static: false })
  private sidenav: MatSidenav;


  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private reportStoreService: OReportStoreService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  createFilter(values: Array<{ attr, value }>): Expression {

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
    let ce: Expression;
    if (filters.length > 0) {
      ce = filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
    }

    return ce;

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

  fillReportFilter() {
    const filter = this.filterBuilder.getBasicExpression() === undefined ? {} : {
      'filter': this.filterBuilder.getBasicExpression()
    }
    this.reportStoreService.openFillReport("2abdb71f-6ea7-4d13-b255-b0df406c8f0b", {}, filter);
  }

}
