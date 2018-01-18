import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InputConverter } from 'ontimize-web-ngx';

export const DEFAULT_INPUTS_CARD_CONTENT = [
  'color'
];

export const DEFAULT_OUTPUTS_CARD_CONTENT = [
];

@Component({
  selector: 'card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
  inputs: DEFAULT_INPUTS_CARD_CONTENT,
  outputs: DEFAULT_OUTPUTS_CARD_CONTENT,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.card-content]': 'true',
    '[class.mat-elevation-z1]': 'true'
  }
})
export class CardContentComponent implements OnInit {

  public static DEFAULT_INPUTS_CARD_CONTENT = DEFAULT_INPUTS_CARD_CONTENT;
  public static DEFAULT_OUTPUTS_CARD_CONTENT = DEFAULT_OUTPUTS_CARD_CONTENT;

  color: string;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
  }

}
