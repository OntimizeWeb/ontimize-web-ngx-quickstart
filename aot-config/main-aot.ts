import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/app.module.ngfactory';

import { ontimizePostBootstrap } from 'ontimize-web-ngx';

// if (environment.production) {
enableProdMode();
// }

const promise = platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
promise.then(ontimizePostBootstrap).catch(err => {
  console.error(err.message);
});
