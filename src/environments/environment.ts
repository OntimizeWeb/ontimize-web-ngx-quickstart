// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  apiEndpoint: 'https://appwsc-qsallcomponents.ontimize.com/qsallcomponents-jee/services/rest',
  production: false,
  versions: {
    core: '18.0.0-next.2',
    charts: '18.0.0-next.0',
    filemanager: '18.0.0-next.0',
    map: '18.0.0-next.0',
    report: '18.0.0-next.0',
    extraComponentes: '18.0.0-next.1'
  }
};
