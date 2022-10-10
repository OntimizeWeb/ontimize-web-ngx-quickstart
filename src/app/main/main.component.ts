import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent  {
  router: Router;

  constructor(router: Router) { }

  openAbout() {
    this.router.navigate(["/main/about"]);
  }

}
