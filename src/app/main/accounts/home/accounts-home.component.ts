import { Injector, ViewEncapsulation, Component } from '@angular/core';

@Component({
  selector: 'accounts-home',
  styleUrls: ['./accounts-home.component.scss'],
  templateUrl: './accounts-home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountsHomeComponent {


  constructor(protected injector: Injector) {
  }


}
