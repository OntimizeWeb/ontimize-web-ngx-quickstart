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

@Injectable()
export class ThemeService {

  private static STORAGE_KEY = 'theme';

  public availableThemes = [
    {
      primary: '#0d0d0d',
      accent: '#ffad00',
      href: 'ontimize.css',
      href_dark: 'ontimize-dark.css',
      isDefault: true
    },
    {
      primary: '#464f64',
      accent: '#ffcc00',
      href: 'qs-blue-yellow.css',
      href_dark: 'qs-blue-yellow-dark.css',
    },
    {
      primary: '#607d8b',
      accent: '#7daa4c',
      href: 'qs-gray-green.css',
      href_dark: 'qs-gray-green-dark.css'
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
