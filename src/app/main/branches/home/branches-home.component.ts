import { Component } from '@angular/core';
import { OReportStoreService } from 'ontimize-web-ngx-report';

@Component({
  selector: 'branches-home',
  templateUrl: './branches-home.component.html',
  styleUrls: ['./branches-home.component.scss']
})
export class BranchesHomeComponent {

  constructor(private reportStoreService: OReportStoreService) { }

  openBranchReportStore() {
    this.reportStoreService.openFillReport("96c0aa72-2582-4aa4-a93a-afe34acb77c6", {}, {});
  }

  openBranchDetailReportStore(data: any) {
    const params = {
      'id': data.OFFICEID
    };
    this.reportStoreService.openFillReport("1685066d-97ee-4b1e-a18a-278dabc5c7a0", params, {});
  }


}
