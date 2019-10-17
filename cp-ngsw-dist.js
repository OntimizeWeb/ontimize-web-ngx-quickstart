var fs = require('fs');

// fs.createReadStream('node_modules/@angular/service-worker/ngsw-worker.js').pipe(fs.createWriteStream('dist/ngsw-worker.js'));

/*  Use with node version >= 8.5*/

fs.copyFile('node_modules/@angular/service-worker/ngsw-worker.js', 'dist/ngsw-worker.js', (err) => {
    if(err) throw err;
    console.log('Copy SW in dist directory');
});
