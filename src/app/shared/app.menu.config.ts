import { MenuRootItem } from 'ontimize-web-ngx';

import { AccountsCardComponent } from './accounts-card/accounts-card.component';
import { BranchesCardComponent } from './branches-card/branches-card.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { EmployeesCardComponent } from './employees-card/employees-card.component';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  {
    id: 'data', name: 'DATA_', icon: 'remove_red_eye', opened: true,
    items: [
      {
        id: 'customers',
        name: 'CUSTOMERS',
        tooltip: 'CUSTOMERS_CONTENT',
        route: '/main/customers',
        icon: 'people',
        image: 'assets/images/ic_clientes.png',
        component: CustomersCardComponent
      },
      {
        id: 'accounts',
        name: 'ACCOUNTS',
        tooltip: 'ACCOUNTS_CONTENT',
        route: '/main/accounts',
        icon: 'credit_card',
        image: 'assets/images/ic_cuentas.png',
        component: AccountsCardComponent
      },
      {
        id: 'branches',
        name: 'BRANCHES',
        tooltip: 'BRANCHES_CONTENT',
        route: '/main/branches',
        icon: 'account_balance',
        image: 'assets/images/ic_sucursales.png',
        component: BranchesCardComponent
      },
      {
        id: 'employees',
        name: 'EMPLOYEES',
        tooltip: 'EMPLOYEES_CONTENT',
        route: '/main/employees',
        icon: 'person',
        image: 'assets/images/ic_empleados.png',
        component: EmployeesCardComponent
      }
    ]
  },
  {
    id: 'management', name: 'MANAGEMENT', icon: 'info_outline', opened: false,
    items: [
      {
        id: 'reports',
        name: 'REPORTS',
        tooltip: 'REPORTS_CONTENT',
        route: '/main/reports',
        icon: 'description'
      }
    ]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [
  AccountsCardComponent,
  CustomersCardComponent,
  BranchesCardComponent,
  EmployeesCardComponent
];
