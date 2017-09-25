import {
  ViewEncapsulation,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'branches-detail',
  templateUrl: './branches-detail.component.html',
  styleUrls: ['./branches-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BranchesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
