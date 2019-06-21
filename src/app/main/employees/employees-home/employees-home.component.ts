import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterExpressionUtils, IExpression } from 'ontimize-web-ngx';

import { EmployeesDetailComponent } from '../employees-detail/employees-detail.component';

@Component({
  selector: 'employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesHomeComponent {

  constructor(
    protected dialog: MatDialog,
    protected sanitizer: DomSanitizer
  ) { }

  public createFilter(values: Array<{ attr: string, value: any }>): IExpression {
    // Prepare simple expressions from the filter components values
    const filters: IExpression[] = [];
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

}
