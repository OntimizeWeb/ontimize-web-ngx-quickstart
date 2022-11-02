import { Config } from 'ontimize-web-ngx';
import { SERVICE_CONFIG } from './shared/app.services.config';
import { MENU_CONFIG } from './shared/app.menu.config';
import { environment } from '../environments/environment';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  apiEndpoint: environment.apiEndpoint,

  bundle: {
    path: 'bundle'
  },

  //  Application identifier. Is the unique package identifier of the app.
  // It is used when storing or managing temporal data related with the app. By default is set as 'ontimize-web-uuid'.
  uuid: 'com.ontimize.web.quickstart8x',

  // Title of the app
  title: 'Ontimize Web Quickstart',

  //  Language of the application.
  locale: 'en',

  // Configuration parameters of application services.
  servicesConfiguration: SERVICE_CONFIG,

  appMenuConfiguration: MENU_CONFIG,

  applicationLocales: ['es', 'en'],

  exportConfiguration: {
    path: '/export'
  }

};
