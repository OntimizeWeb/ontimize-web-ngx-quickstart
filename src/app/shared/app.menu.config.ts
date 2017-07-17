import {
  MenuRootItem,
  MenuGroup,
  MenuItem
} from 'ontimize-web-ng2';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  {
    id: 'views',
    name: 'VIEW',
    icon: 'remove_red_eye',
    opened: true,
    items: [
      { id: 'customers', name: 'CUSTOMERS', route: '/main/customers', icon: 'people' },
      { id: 'accounts', name: 'ACCOUNTS', route: '/main/accounts', icon: 'credit_card' },
      { id: 'branches', name: 'BRANCHES', route: '/main/branches', icon: 'account_balance' }
    ]
  },
  {
    id: 'general',
    name: 'GENERAL',
    icon: 'info_outline',
    opened: false,
    items: [
      { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
    ]
  }
];



