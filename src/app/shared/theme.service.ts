import { EventEmitter, Injectable } from '@angular/core';
import { AppConfig, Util } from 'ontimize-web-ngx';

import { StyleManager } from './style-manager/style-manager';

export interface DocsSiteTheme {
  href: string;
  accent: string;
  primary: string;
  href_dark: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private static STORAGE_KEY = 'theme';

  public availableThemes = [
    {
      primary: '#1464a5',
      accent: '#1464a5',
      href: 'ontimize.css',
      href_dark: 'ontimize-dark.css',
      isDefault: true
    },
    {
      primary: '#4649A6',
      accent: '#4649A6',
      href: 'o-violet-blues.css',
      href_dark: 'o-violet-blues-dark.css'
    },
    {
      primary: '#071540',
      accent: '#41bf78',
      href: 'o-oxford-blue-emerald.css',
      href_dark: 'o-oxford-blue-emerald-dark.css'
    },
    {
      primary: '#d02a38',
      accent: '#363636',
      href: 'o-madder-lake-jet.css',
      href_dark: 'o-madder-lake-jet-dark.css'
    },
    {
      primary: '#0e2f59',
      accent: '#006bdb',
      href: 'o-prussian-celtic-blue.css',
      href_dark: 'o-prussian-celtic-blue-dark.css'
    }
  ];
  public currentTheme: DocsSiteTheme;
  public onThemeUpdate: EventEmitter<DocsSiteTheme> = new EventEmitter<DocsSiteTheme>();

  constructor(
    private config: AppConfig,
    private _styleManager: StyleManager
  ) { }

  storeTheme(theme: DocsSiteTheme): void {
    const locStrgData = window.localStorage[this.config.getConfiguration().uuid] || '{}';
    const storedData = JSON.parse(locStrgData);
    storedData[ThemeService.STORAGE_KEY] = theme;
    window.localStorage[this.config.getConfiguration().uuid] = JSON.stringify(storedData);
    this.onThemeUpdate.emit(theme);
  }

  getStoredTheme(): DocsSiteTheme {
    const locStrgData = window.localStorage[this.config.getConfiguration().uuid] || '{}';
    return JSON.parse(locStrgData)[ThemeService.STORAGE_KEY] || this.getDefaultTheme();
  }

  installTheme(theme: DocsSiteTheme): void {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);
    if (!Util.isDefined(this.currentTheme)) {
      this.currentTheme = this.getDefaultTheme();
    }

    if (theme.isDark) {
      this._styleManager.setStyle('theme', `./assets/themes/${theme.href_dark}`);
    } else {
      this._styleManager.setStyle('theme', `./assets/themes/${theme.href}`);
    }

    this.currentTheme.isDark = theme.isDark;

    if (this.currentTheme) {
      this.storeTheme(this.currentTheme);
    }
  }

  getDefaultTheme(): DocsSiteTheme {
    return this.availableThemes[0];
  }

  private _getCurrentThemeFromHref(href: string): DocsSiteTheme {
    return this.availableThemes.find(theme => theme.href === href);
  }

}
