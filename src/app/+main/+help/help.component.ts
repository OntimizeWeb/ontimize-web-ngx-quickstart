import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-help',
  templateUrl: 'help.component.html',
  styleUrls: ['help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private router: Router,
    private actRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
