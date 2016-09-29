import { LOGIN_DIRECTIVES } from './+login';
import { MainComponent } from './+main';
import { ABOUT_DIRECTIVES } from './+main/+about';
import { ACCOUNTS_DIRECTIVES } from './+main/+accounts';
import { CUSTOMERS_DIRECTIVES } from './+main/+customers';
import { HELP_DIRECTIVES } from './+main/+help';
import { HOME_DIRECTIVES } from './+main/+home';
import { SHARED_DIRECTIVES } from './shared';


// All directives of the application
export const APP_DIRECTIVES: any = [
  LOGIN_DIRECTIVES,
  MainComponent,
  ABOUT_DIRECTIVES,
  ACCOUNTS_DIRECTIVES,
  CUSTOMERS_DIRECTIVES,
  HELP_DIRECTIVES,
  HOME_DIRECTIVES,
  SHARED_DIRECTIVES
];
