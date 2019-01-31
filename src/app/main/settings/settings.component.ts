import { Component, ViewEncapsulation } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { AppConfig, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.app-settings]': 'true'
  }
})
export class SettingsComponent {

  public availableLangs: string[] = [];
  public currentLang: string;

  constructor(
    protected appConfig: AppConfig,
    protected translateService: OTranslateService
  ) {
    this.availableLangs = this.appConfig.getConfiguration().applicationLocales;
    this.currentLang = this.translateService.getCurrentLang();
  }

  changeLang(e: MatRadioChange): void {
    if (this.translateService && this.translateService.getCurrentLang() !== e.value) {
      this.translateService.use(e.value);
    }
  }

}
