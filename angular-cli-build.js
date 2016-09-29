/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'core-js/client/shim.min.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      '@angular2-material/**/*.js',

      'ontimize-web-ng2/*.js',
      'ontimize-web-ng2/ontimize/**/*.js',

      

      'ng2-translate/**/*.js',
      'moment/**/*.js',
      'jquery/dist/jquery.min.js',
      'jquery-ui/ui/**/*.js',
      'pdfmake/build/*.js',
      'datatables.net/js/jquery.dataTables.js',
      'datatables.net-buttons/js/*.js',
      'datatables.net-colreorder/js/dataTables.colReorder.js',
      'datatables.net-select/js/dataTables.select.js',
      'colresizable/*.js',

      'ontimize-web-ng2/**/*.css',
      '@angular2-material/**/*.scss',
      '@angular2-material/**/*.css'
    ]
  });
};
