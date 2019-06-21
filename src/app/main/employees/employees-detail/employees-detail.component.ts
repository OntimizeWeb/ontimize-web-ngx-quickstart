import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.scss']
})
export class EmployeesDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected sanitizer: DomSanitizer
  ) { }

  public getImageSrc(base64: string): any {
    return base64 ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + base64) : './assets/images/no-image-transparent.png';
  }

}
