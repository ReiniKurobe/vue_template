const gulp = require('gulp');
const sass = require('gulp-sass');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const vueify = require('gulp-vueify');

// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

gulp.task('default', function () {
});

// task
gulp.task('webpack', function () {
    // 設定ファイルで指定してあるデータをコンパイルして、吐き出す
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("./dest/js/"));
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dest/css/'));
});

gulp.task('sass-build', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dest/css/'));
});

gulp.task('watch-js', function () {
  // JSが変更されたとき
  gulp.watch('./src/js/**/**.js', gulp.task('webpack'));
});

gulp.task('watch-vue', function () {
  gulp.watch('./src/js/**/**.vue', gulp.task('webpack'));
});

gulp.task('watch-sass', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.task('sass'));
});

// デフォルト実行対象
gulp.task('watch', gulp.parallel('watch-js', 'watch-vue', 'watch-sass'));
gulp.task('build', gulp.parallel('webpack', 'sass-build'));
