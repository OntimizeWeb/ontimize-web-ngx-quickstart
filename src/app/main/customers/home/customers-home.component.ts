import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterExpressionUtils, OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss']
})
export class CustomersHomeComponent implements OnInit {

  @ViewChild('table', { static: true }) table: OTableComponent;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.table.reinitialize({
        columns: "CUSTOMERID;NAME;SURNAME;ADDRESS;STARTDATE;EMAIL",
        sortColumns: "NAME",
        visibleColumns: "NAME;SURNAME;STARTDATE"
      });
      this.table.reloadData();
    }, 10000);
  }

  filterFunction(columnAttr: string, filter: string) {
    // 
    // stackExpressionEqualsAND
    return FilterExpressionUtils.buildExpressionEquals(columnAttr, filter);
  }

  onQuickfilterChange(filterValue: string, table: any) {
    if (filterValue && filterValue.length > 0) {
      table.pageable = true;
      table.reloadPaginatedDataFromStart();
    } else {
      table.setDataArray([]);
    }
  }
}
