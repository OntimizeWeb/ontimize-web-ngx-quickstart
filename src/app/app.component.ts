import { Component, OnInit, ViewChild, Injector } from '@angular/core';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(protected injector: Injector) {
  }

  ngOnInit() {
  }

}
