import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { OTextInputComponent, OTranslateService } from 'ontimize-web-ngx';
import { OReportStoreService } from 'ontimize-web-ngx-report';


@Component({
  selector: 'branches-detail',
  templateUrl: './branches-detail.component.html',
  styleUrls: ['./branches-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.branches-detail]': 'true'
  }
})
export class BranchesDetailComponent implements OnInit {

  @ViewChild('officeId', { static: true })
  officeId: OTextInputComponent;

  public longitide;
  public latitude;
  public name;

  public params: object;

  constructor(
    public snackBar: MatSnackBar,
    private translateService: OTranslateService,
    private reportStoreService: OReportStoreService
  ) { }

  ngOnInit() { }


  onUploadFile(e: Event) {
    this.snackBar.open(this.translateService.get('BRANCH_PLAN_UPLOADED'), this.translateService.get('ACCEPT'), {
      duration: 2000,
    });
  }
  onFormDataLoaded(data: any) {
    if (data.MINLATITUDE) {
      this.latitude = data.MINLATITUDE;
    }
    if (data.MINLONGITUDE) {
      this.longitide = data.MINLONGITUDE;
    }
    this.params = this.getParameters();
  }

  hasGPSPositition() {
    if (this.latitude && this.longitide) {
      return true;
    }
    return false;
  }

  getPositionGPS() {
    return this.latitude + ',' + this.longitide
  }

  getParameters() {
    let params = {
      'id': this.officeId.getValue()
    }

    return params;
  }

  fillReport(e: Event) {
    this.reportStoreService.openFillReport("1c272846-0693-42c3-b2a3-7f10c611ad6c", this.params, {});
  }

}
