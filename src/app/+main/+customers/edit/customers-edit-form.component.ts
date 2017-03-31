import { Injector, forwardRef, NgZone, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OComponent, OFormComponent } from 'ontimize-web-ng2/ontimize';

@OComponent({
  selector: 'customers-edit-form',
  providers: [{
    provide: OFormComponent,
    useExisting: forwardRef(() => CustomersEditFormComponent)
  }],
  inputs: [
    ...OFormComponent.DEFAULT_INPUTS_O_FORM
  ]
})
export class CustomersEditFormComponent extends OFormComponent {

  constructor(router: Router,
    actRoute: ActivatedRoute,
    zone: NgZone,
    cd: ChangeDetectorRef,
    injector: Injector,
    elRef: ElementRef
  ) {
    super(router, actRoute, zone, cd, injector, elRef);
  }

  public postCorrectUpdate(result: any) {
    super.postCorrectUpdate(result);
    console.log('[CustomersEditFormComponent.postCorrectUpdate]', result);
  }

  public postIncorrectUpdate(result: any) {
    super.postIncorrectUpdate(result);
    console.log('[CustomersEditFormComponent.postIncorrectUpdate]', result);
  }

}
