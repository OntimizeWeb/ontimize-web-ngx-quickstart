import { Component } from '@angular/core';
import { Util } from 'ontimize-web-ngx';

import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _themeService: ThemeService
  ) {
    const theme = this._themeService.getStoredTheme();
    if (!Util.isDefined(theme)) {
      this._themeService.currentTheme = this._themeService.getDefaultTheme();
      this._themeService.storeTheme(this._themeService.currentTheme);
    } else {
      this._themeService.installTheme(theme);
    }
  }

}
