import {
  Injector,
  ViewChild,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  Component
} from '@angular/core';

import {
  OntimizeService,
  OFormComponent
} from 'ontimize-web-ng2';

@Component({
  selector: 'accounts-home',
  styleUrls: ['./accounts-home.component.scss'],
  templateUrl: './accounts-home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountsHomeComponent implements OnInit, AfterViewInit {

  @ViewChild('filtersForm') filtersForm: OFormComponent;

  protected service: OntimizeService;
  protected officesArray: Array<Object>;
  protected accountTypesArray: Array<Object>;

  constructor(protected injector: Injector) {
  }

  ngOnInit() {
    this.configureService();
  }

  protected configureService() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration();
    conf['entity'] = 'EAccounts';
    this.service.configureService(conf);
  }

  ngAfterViewInit() {
    if (this.filtersForm) {
      this.filtersForm.setFormMode(2);
    }
  }
}
