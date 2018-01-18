import { ViewEncapsulation, Injector, Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {

  constructor(private injector: Injector) {

  }
}
