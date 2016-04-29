var requireDir  = require('require-dir');
var runSequence = require('run-sequence');
var gulp        = require('gulp');
var del         = require('del');

gulp.task('copy:js', function () {
  return gulp.src(['node_modules/jquery/dist/*.min.js', '!node_modules/jquery/dist/*.slim.min.js', 'node_modules/materialize-css/dist/js/*.min.js', 'vendors/*'])
          .pipe(gulp.dest('./lib/js'));
});

gulp.task('copy:font', function () {
  return gulp.src(['node_modules/materialize-css/dist/font/**/*'])
          .pipe(gulp.dest('./lib/font'));
});

gulp.task('copy:css', function () {
  return gulp.src(['node_modules/materialize-css/dist/css/*.min.css'])
          .pipe(gulp.dest('./lib/css'));
});

gulp.task('clean', function () {
  return del(['./lib/**/*', './lib']);
})

gulp.task('build', function () {
  runSequence('clean', ['copy:js', 'copy:css', 'copy:font']);
});