import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'branches-card',
  templateUrl: './branches-card.component.html',
  styleUrls: ['./branches-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.branches-card]': 'true'
  }
})
export class BranchesCardComponent {

  nationalBranches: number;
  internationalBranches: number;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('branches'));
    const self = this;
    this.ontimizeService.query(void 0, ['COUNTRY'], 'branch').subscribe(
      res => {
        if (res && res.data.length) {
          self.nationalBranches = res.data.filter((e: any) => e['COUNTRY'] === 'Spain').length;
          self.internationalBranches = res.data.length - self.nationalBranches;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }

}
