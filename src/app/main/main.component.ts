import { Component, ViewEncapsulation } from '@angular/core';
import { Util } from 'ontimize-web-ngx';

import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {

  constructor(
    private _themeService: ThemeService
  ) {
    const theme = this._themeService.getStoredTheme();
    if (!Util.isDefined(theme)) {
      this._themeService.currentTheme = this._themeService.availableThemes[0];
      this._themeService.storeTheme(this._themeService.currentTheme);
    } else {
      this._themeService.installTheme(theme);
    }
  }

}
