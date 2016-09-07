import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watchify from 'watchify';
import rename from 'gulp-rename';
import gutil from 'gulp-util';
import Karma from 'karma'

const config = {
  src: './src/app.js',
  dest: './dist/'
};

let bundle = (bundler) => {
  bundler
    .bundle()
    .pipe(source('bundled-app.js'))
    .pipe(buffer())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(config.dest))
    .on('error', (err) => gutil.log(gutil.colors.red(`==> Build Error! ${err.message}`)))
    .on('end', () => gutil.log(gutil.colors.green('==> Successful Bundle!')));
}

gulp.task('bundle', () => {

  let bundler = browserify(config.src, {debug: true})
                  .plugin(watchify)
                  .transform(babelify, {presets: ['es2015']});

  bundle(bundler);

  bundler.on('update', () => bundle(bundler));
});

gulp.task('test', (done) => {
  new Karma.Server({
    configFile: `${__dirname}/karma.conf.js`,
    singleRun: false
  }).start();
});

gulp.task('default', ['bundle', 'test']);
