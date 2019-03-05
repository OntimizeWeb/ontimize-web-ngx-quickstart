import {
  ViewEncapsulation,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OTextInputComponent, OTranslateService } from 'ontimize-web-ngx'
import { MatSnackBar } from '@angular/material';

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

  @ViewChild('officeId')
  officeId: OTextInputComponent;

  public longitide;
  public latitude;
  public name;

  constructor(
    public snackBar: MatSnackBar,
    private translateService: OTranslateService
  ) { }

  ngOnInit() { }

  getFileData() {
    return {
      'OFFICEID': this.officeId.getValue()
    };
  }

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

}
