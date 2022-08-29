import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Expression, FilterExpressionUtils, OFilterBuilderComponent } from 'ontimize-web-ngx';
import { OReportStoreService } from 'ontimize-web-ngx-report';
import { EmployeesDetailComponent } from '../employees-detail/employees-detail.component';

@Component({
  selector: 'employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesHomeComponent {

  @ViewChild('filterBuilder', { static: true })
  filterBuilder: OFilterBuilderComponent;

  constructor(
    protected dialog: MatDialog,
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

  public openDetail(data: any): void {
    this.dialog.open(EmployeesDetailComponent, {
      height: '330px',
      width: '520px',
      data: data
    });
  }

  fillReportFilter() {
    let filter = this.filterBuilder.getBasicExpression() === undefined ? {} : {
      'filter': this.filterBuilder.getBasicExpression()
    }
    this.reportStoreService.openFillReport("c27490e0-1a69-42ac-9083-bf7548f9f66d", {}, filter);
  }

}
