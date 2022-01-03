// Sassのコンパイルタスクのサンプルファイルです。

// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));
//const sass = require('gulp-sass');

// style.scssの監視タスクを作成する
gulp.task('style', function () {
    return (
    gulp
    .src('./assets/styles/style.scss')
      // Sassのコンパイルを実行
    .pipe(sass({outputStyle: 'expanded'})
      // Sassのコンパイルエラーを表示
      // (これがないと自動的に止まってしまう)
    .on('error', sass.logError))
      // cssフォルダー以下に保存
    .pipe(gulp.dest('./css'))
    );
});

// style.scssの監視タスクを作成する
gulp.task('default', function () {
    gulp.watch('./assets/styles/**/*.scss', gulp.task("style") );
});