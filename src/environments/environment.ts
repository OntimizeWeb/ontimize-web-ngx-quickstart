// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  apiEndpoint: 'https://try.imatia.com/ontimizeweb/services/qsallcomponents-jee/services/rest',
  production: false,
  pwa: false,
  versions: {
    core: '4.1.2',
    charts: '4.0.4',
    filemanager: '4.0.1',
    map: '4.0.1',
    theming: '4.0.2',
    tools: '4.0.0'
  }
};
