import {Config} from 'ontimize-web-ng2/ontimize';

import { SERVICE_CONFIG } from './shared/app.services.config';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  apiEndpoint: 'http://try.ontimize.com/QSAllComponents/rest',

  //  Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. By default is set as 'ontimize-web-uuid'.
  uuid: 'com.ontimize.web.ng2.quickstart',

  // Title of the app
  title: 'Quickstart',

  //  Language of the application.
  locale: 'es',

  // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation) in the whole application.
  // serviceType

  // Configuration parameters of application services.
  servicesConfiguration: SERVICE_CONFIG
};
