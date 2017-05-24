import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DialogService } from 'ontimize-web-ng2';

@Component({
  moduleId: module.id,
  selector: 'bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss']
})
export class BarMenuComponent implements OnInit {

  ontimizeWebVersion = '2.0.0-rc.0';

  public showVersionCallback: Function;

  constructor(private router: Router, private actRoute: ActivatedRoute,
    private zone: NgZone, @Inject(DialogService) private dialogService: DialogService) {
  }

  public ngOnInit() {
    this.showVersionCallback = this.showVersion.bind(this);
  }

  public showVersion() {
    this.dialogService.alert('VERSION', this.ontimizeWebVersion);
  }

}
