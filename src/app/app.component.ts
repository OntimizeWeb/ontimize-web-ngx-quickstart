import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DialogService, ODialogComponent } from 'ontimize-web-ng2/ontimize';

@Component({
  moduleId: module.id,
  selector: 'o-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('dialog')
  protected dialog: ODialogComponent;

  constructor(@Inject(DialogService) private dialogService: DialogService) {
    }

  ngOnInit() {
    this.dialogService.dialog = this.dialog;
  }

}
