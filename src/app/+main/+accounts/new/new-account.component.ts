import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-account',
  templateUrl: 'new-account.component.html',
  styleUrls: ['new-account.component.css']
})
export class NewAccountComponent {

  constructor(  ) {
    console.log('constructor new account ');
  }

}
