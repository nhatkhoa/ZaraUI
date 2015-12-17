'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import path from 'path';
import sync from 'run-sequence';
import serve from 'browser-sync';
import rename from 'gulp-rename';
import template from 'gulp-template';
import fs from 'fs';
import yargs from 'yargs';
import lodash from 'lodash';
import proxy from 'http-proxy-middleware';
import changeCase from 'change-case';

let reload = () => serve.reload();
let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  common: resolveToApp('common/**/*.js'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

const p = proxy('/api', {
  target: 'http://localhost:8080', 
  changeOrigin: true,
  ws: true
});

gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {
      baseDir: root
    },
    middleware: [p]
  });
});

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.styl], [paths.common]);
  gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('component', () => {
  let cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  let name = yargs.argv.name;
  let paramCase = changeCase.paramCase(yargs.argv.name);
  let parentPath = changeCase.paramCase(yargs.argv.parent || '');
  let destPath = path.join(resolveToComponents(), parentPath, paramCase);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name),
      paramCase: paramCase,
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', paramCase);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('default', (done) => {
  sync('webpack', 'serve', 'watch', done);
});
