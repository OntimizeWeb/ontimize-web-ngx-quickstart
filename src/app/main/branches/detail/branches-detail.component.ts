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
  encapsulation: ViewEncapsulation.None
})
export class BranchesDetailComponent implements OnInit {

  @ViewChild('officeId')
  officeId: OTextInputComponent;

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

}
