import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { NavigationService } from "ontimize-web-ngx";

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(protected injector: Injector) {
    const navigationService = injector.get(NavigationService);
    navigationService.initialize();
  }

  ngOnInit() {
  }

}
