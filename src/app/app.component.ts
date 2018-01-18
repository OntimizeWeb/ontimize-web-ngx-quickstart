import { Component, Injector } from '@angular/core';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(protected injector: Injector) {
  }

}
