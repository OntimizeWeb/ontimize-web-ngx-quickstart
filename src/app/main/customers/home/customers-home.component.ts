import { Component, ViewChild } from '@angular/core';
import { OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss']
})
export class CustomersHomeComponent  {

  @ViewChild('table', { static: true }) table: OTableComponent;

  constructor() { }

}
