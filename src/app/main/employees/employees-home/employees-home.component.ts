import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Expression, FilterExpressionUtils, OFilterBuilderComponent } from 'ontimize-web-ngx';
import { OReportStoreService } from 'ontimize-web-ngx-report';

import { EmployeesDetailComponent } from '../employees-detail/employees-detail.component';
import { OFilterParameter } from 'ontimize-web-ngx-report/lib/types/filter-parameter.type';
import { GridConfig, TableConfig } from 'ontimize-web-ngx-extra-components';

@Component({
  selector: 'employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesHomeComponent {

  @ViewChild('filterBuilder', { static: true })
  filterBuilder: OFilterBuilderComponent;

  tableCfg: TableConfig = {
    visibleColumns: "EMPLOYEEPHOTO;EMPLOYEESURNAME;EMPLOYEENAME;EMPLOYEESTARTDATE;EMPLOYEEEMAIL;EMPLOYEEPHONE;EMPLOYEETYPEID;EMPLOYEEADDRESS;OFFICEID",
    showPaginatorFirstLastButtons: "yes", filterColumnActiveByDefault: "yes", showReportOnDemandOption: 'no', showChartsOnDemandOption: 'no', exportButton: 'no', showFilterOption: 'no', showConfigurationOption: 'no', multipleSort: 'yes'
  };
  gridCfg: GridConfig = { cols: 4, gutterSize: '18px', quickFilterColumns: 'EMPLOYEENAME;EMPLOYEESURNAME;EMPLOYEEADDRESS;EMPLOYEEEMAIL;OFFICEID', showPageSize: "no", insertButtonFloatable: 'no' };


  constructor(
    protected sanitizer: DomSanitizer,
    private reportStoreService: OReportStoreService
  ) { }

  public createFilter(values: Array<{ attr: string, value: any }>): Expression {
    // Prepare simple expressions from the filter components values
    const filters: Expression[] = [];
    values.forEach(fil => {
      if (fil.value) {
        if (fil.attr === 'EMPLOYEENAME' || fil.attr === 'EMPLOYEESURNAME' || fil.attr === 'EMPLOYEEEMAIL') {
          filters.push(FilterExpressionUtils.buildExpressionLike(fil.attr, fil.value));
        }
        if (fil.attr === 'EMPLOYEETYPEID' || fil.attr === 'OFFICEID') {
          filters.push(FilterExpressionUtils.buildExpressionEquals(fil.attr, fil.value));
        }
      }
    });

    // Build complex expression
    if (filters.length > 0) {
      return filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
    } else {
      return null;
    }
  }

  public getImageSrc(base64: string): any {
    return base64 ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + base64) : './assets/images/no-image-transparent.png';
  }

  fillReportFilter() {
    let filter: OFilterParameter = {
      'filter': this.filterBuilder.getBasicExpression() === undefined ? {} : this.filterBuilder.getBasicExpression()
    };
    this.reportStoreService.openFillReport("c27490e0-1a69-42ac-9083-bf7548f9f66d", [], filter);
  }

}
