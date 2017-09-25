import {
  ViewEncapsulation,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'branches-edit',
  templateUrl: './branches-edit.component.html',
  styleUrls: ['./branches-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BranchesEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
