import { Injector, Component, forwardRef, NgZone, ChangeDetectorRef, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OComponent, OFormComponent, OntimizeService, dataServiceFactory } from 'ontimize-web-ngx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'customers-detail-form',
  providers: [
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] },
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => CustomerDetailFormComponent)
    }
  ],
  templateUrl: './o-form.component.html',
  styleUrls: ['./o-form.component.scss'],
  inputs: OFormComponent.DEFAULT_INPUTS_O_FORM,
  outputs: OFormComponent.DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-form]': 'true',
    '[class.fill]': 'layoutFill'
  }
})

export class CustomerDetailFormComponent extends OFormComponent {

  constructor(
    router: Router,
    actRoute: ActivatedRoute,
    zone: NgZone,
    cd: ChangeDetectorRef,
    injector: Injector,
    elRef: ElementRef) {
    super(router, actRoute, zone, cd, injector, elRef);

  }

}
