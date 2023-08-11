const fs = require('fs');

fs.rmSync('./dist', { recursive: true, force: true });
fs.mkdirSync('./dist');

fs.copyFileSync('index.html', './dist/index.html');
fs.copyFileSync('single.html', './dist/single.html');
fs.copyFileSync('bundle.js', './dist/bundle.js');
fs.copyFileSync('bundle-single.js', './dist/bundle-single.js');
fs.copyFileSync('main.css', './dist/main.css');
fs.copyFileSync('logo.png', './dist/logo.png');