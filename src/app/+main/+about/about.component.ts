import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {


  constructor(private router: Router,
    private actRoute: ActivatedRoute) {
  }

  ngOnInit() {
    //nothing to do
  }

}
