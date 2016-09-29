
import {
  CustomersHomeComponent,
  NewCustomerComponent,
  CustomersEditComponent,
  CustomersDetailComponent
} from '../+customers';

// For testing inheritance on forms...
import { CustomersEditFormComponent } from './edit/customers-edit-form.component';


export const CUSTOMERS_DIRECTIVES: any = [
  CustomersHomeComponent,
  NewCustomerComponent,
  CustomersEditComponent,
  CustomersDetailComponent,
  CustomersEditFormComponent,
];
