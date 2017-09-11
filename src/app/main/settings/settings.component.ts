import {
  ViewEncapsulation,
  Injector,
  Component,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  UserInfo,
  OUserInfoService,
  OFormComponent,
  OPasswordInputComponent,
  DialogService,
  LoginService
} from 'ontimize-web-ng2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements AfterViewInit {
  //  implements OnInit
  protected loginService: LoginService;
  protected dialogService: DialogService;
  protected oUserInfoService: OUserInfoService;
  public userInfo: UserInfo;

  @ViewChild('oForm') oForm: OFormComponent;
  @ViewChild('oldPassword') oldPassword: OPasswordInputComponent;
  @ViewChild('newPassword') newPassword: OPasswordInputComponent;
  @ViewChild('confirmPassword') confirmPassword: OPasswordInputComponent;

  constructor(
    protected injector: Injector
  ) {
    this.loginService = this.injector.get(LoginService);
    this.dialogService = this.injector.get(DialogService);
    this.oUserInfoService = this.injector.get(OUserInfoService);
    this.userInfo = this.oUserInfoService.getUserInfo();
  }

  // ngOnInit() {
  //   this.oForm.setFormMode(2);
  // }

  ngAfterViewInit() {
    this.oForm.setFormMode(2);
    this.oForm.queryData({
      USER_: this.loginService.getSessionInfo().user
    });
  }

  changePassword() {
    if (this.newPassword.getValue() !== this.confirmPassword.getValue()) {
      this.dialogService.error('ERROR', 'WRONG_PASSWORD_MATCH');
      return;
    }
  }

  updateUserData() {
    this.oForm._editAction();
  }
}
