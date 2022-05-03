import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OTableComponent } from 'ontimize-web-ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss']
})
export class CustomersHomeComponent {

  @ViewChild('table', { static: true }) table: OTableComponent;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {

    let state = this.location.getState();
    if (state['CUSTOMERID']) {
      this.router.navigate([state['CUSTOMERID']], { relativeTo: this.route })
    }

  }

}
