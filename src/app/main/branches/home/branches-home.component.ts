import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableButtonComponent, OTableComponent } from 'ontimize-web-ngx';
import { FillService } from 'ontimize-web-ngx-report';

@Component({
  selector: 'branches-home',
  templateUrl: './branches-home.component.html',
  styleUrls: ['./branches-home.component.scss']
})
export class BranchesHomeComponent implements AfterViewInit {

  @ViewChild('button', {static: false})
  protected button: OTableButtonComponent;
  @ViewChild('detailButton', {static: false})
  protected detailButton: OTableButtonComponent;
  @ViewChild('branchEmployeesTable', {static: false})
  protected branchEmployeesTable: OTableComponent;

  public id: any;
  public params: object;

  ngAfterViewInit() {
    this.button.onClick.subscribe(event => {
      this.fillService.openFillReport("96c0aa72-2582-4aa4-a93a-afe34acb77c6", {}, {});
    });
  }

  constructor(private fillService: FillService) { }

  onDataLoaded(e: object) {
    this.id = this.branchEmployeesTable.getParentKeysValues()['OFFICEID'];
    this.params = {
      'id': this.id
    };
    this.detailButton.onClick.subscribe(event => {
      this.fillService.openFillReport("1685066d-97ee-4b1e-a18a-278dabc5c7a0", this.params, {});
    });
  }

}
