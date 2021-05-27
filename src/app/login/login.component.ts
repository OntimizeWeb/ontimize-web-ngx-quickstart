import { Component, Inject, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService, NavigationService } from 'ontimize-web-ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  user: FormControl;
  password: FormControl;
  sessionExpired = false;

  router: Router;

  constructor(
    private actRoute: ActivatedRoute,
    router: Router,
    @Inject(NavigationService) public navigation: NavigationService,
    @Inject(LoginService) private loginService: LoginService,
    public injector: Injector
  ) {
    this.router = router;

    const qParamObs: Observable<any> = this.actRoute.queryParams;
    qParamObs.subscribe(params => {
      if (params) {
        const isDetail = params['session-expired'];
        if (isDetail === 'true') {
          this.sessionExpired = true;
        } else {
          this.sessionExpired = false;
        }
      }
    });

  }

  ngOnInit(): any {
    this.loginService.sessionExpired();
    this.navigation.setVisible(false);

    const userCtrl: FormControl = new FormControl('', Validators.required);
    const pwdCtrl: FormControl = new FormControl('', Validators.required);

    this.loginForm.addControl('username', userCtrl);
    this.loginForm.addControl('password', pwdCtrl);

    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['../'], { relativeTo: this.actRoute });
    }
  }

  login() {
    if (!this.loginForm.valid) {
      alert('Campos no válidos');
    }

    const userName = this.loginForm.value['username'];
    const password = this.loginForm.value['password'];
    if (userName && userName.length > 0 && password && password.length > 0) {
      const self = this;
      this.loginService.login(userName, password)
        .subscribe(() => {
          self.sessionExpired = false;
          self.router.navigate(['../'], { relativeTo: this.actRoute });
        }, this.handleError);
    }
  }

  handleError(error) {
    switch (error.status) {
      case 401:
        console.error('Email or password is wrong.');
        break;
      default: break;
    }
  }

}
