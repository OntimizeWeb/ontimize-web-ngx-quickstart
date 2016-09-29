import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-customer',
  templateUrl: 'new-customer.component.html',
  styleUrls: ['new-customer.component.css']
})
export class NewCustomerComponent {

  constructor(  ) {
    console.log('constructor new customer ');
  }


}
