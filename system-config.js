/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'main': 'main.js',
    '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
    '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'vendor/@angular/http/bundles/http.umd.js',
    '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',
    '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',
    '@angular/material': 'vendor/@angular/material/material.umd.js'
};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // App specific barrels.
    'app',
    'app/shared',
    'app/shared/topbar',
    'app/+login',
    'app/+main/+customers',
    'app/+main/+accounts',
    'app/+main/+employees',
    'app/+main/+home',
    'app/+main/+help',
    'app/+main/+about',
    'app/+main'
];
var cliSystemConfigPackages = {};
// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index', defaultExtension: 'js' };
});
cliSystemConfigPackages['rxjs'] = { defaultExtension: 'js' };
cliSystemConfigPackages['moment'] = { main: 'moment' };
cliSystemConfigPackages['jquery'] = { main: 'dist/jquery.min' };
cliSystemConfigPackages['jquery-ui'] = { main: 'ui/widgets/datepicker' };
cliSystemConfigPackages['datatables.net'] = { main: 'js/jquery.dataTables' };
cliSystemConfigPackages['datatables.net-buttons'] = { main: 'js/dataTables.buttons' };
cliSystemConfigPackages['datatables.net-colreorder'] = { main: 'js/dataTables.colReorder' };
cliSystemConfigPackages['datatables.net-select'] = { main: 'js/dataTables.select' };
cliSystemConfigPackages['colresizable'] = { main: 'colResizable-1.6.min' };
cliSystemConfigPackages['pdfmake'] = { main: 'build/pdfmake.min' };
cliSystemConfigPackages['ng2-translate'] = { main: 'ng2-translate' };
cliSystemConfigPackages['ontimize-web-ng2'] = { main: 'ontimize' };
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        'rxjs': 'vendor/rxjs',
        'moment': 'vendor/moment',
        'jquery': 'vendor/jquery',
        'jquery-ui': 'vendor/jquery-ui',
        'datatables.net': 'vendor/datatables.net',
        'datatables.net-buttons': 'vendor/datatables.net-buttons',
        'datatables.net-colreorder': 'vendor/datatables.net-colreorder',
        'datatables.net-select': 'vendor/datatables.net-select',
        'colresizable': 'vendor/colresizable',
        'pdfmake': 'vendor/pdfmake',
        'ng2-translate': 'vendor/ng2-translate',
        'ontimize-web-ng2': 'vendor/ontimize-web-ng2',
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map