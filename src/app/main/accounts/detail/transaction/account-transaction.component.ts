import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'account-transaction',
  styleUrls: ['./account-transaction.component.scss'],
  templateUrl: './account-transaction.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.account-transaction]': 'true'
  }
})
export class AccountTransactionsDetailComponent { }
