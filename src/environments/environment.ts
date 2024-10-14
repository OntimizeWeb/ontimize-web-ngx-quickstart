// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  //apiEndpoint: 'http://localhost:5656/ontimizeweb/services/qsallcomponents-jee/services/rest',
  apiEndpoint: 'http://localhost:5657/api',
  production: false,
  versions: {
    core: '15.0.2',
    charts: '"15.0.0',
    filemanager: '15.0.0',
    map: '15.0.0',
    report: '15.0.0-beta.1'
  }
};
