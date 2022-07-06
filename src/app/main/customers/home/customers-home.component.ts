import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableButtonComponent, OTableComponent } from 'ontimize-web-ngx';
import { OReportStoreService } from 'ontimize-web-ngx-report';

@Component({
  selector: 'customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss']
})
export class CustomersHomeComponent implements AfterViewInit {

  @ViewChild('table', { static: true }) table: OTableComponent;

  @ViewChild('button', { static: false })
  protected button: OTableButtonComponent;

  ngAfterViewInit() {
    this.button.onClick.subscribe(event => {
      this.reportStoreService.openFillReport("94fa9d2a-e9cc-458a-a680-9bc576e14a38", {}, {});
    });
  }

  constructor(private reportStoreService: OReportStoreService) { }
}
