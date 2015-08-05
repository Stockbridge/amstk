var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');
var del = require('del');

// compile HBS templates to src/js
gulp.task('templates', function () {
  gulp.src('src/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'amstk.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('src/js/'));
});

// clean dist folder
gulp.task('clean', function () {
  del(['dist/css/*', 'dist/js/*']);
});

// compile minified scripts
gulp.task('scripts-build', ['templates'], function () {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

// compile scripts
gulp.task('scripts', ['templates'], function () {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

// compile stylus
gulp.task('stylus-build', function () {
  gulp.src('src/styl/main.styl')
    .pipe(stylus({ use: nib(), compress: true }))
    .pipe(gulp.dest('dist/css'));
});

// compile stylus
gulp.task('stylus', function () {
  gulp.src('src/styl/main.styl')
    .pipe(stylus({ use: nib(), compress: false, linenos: true }))
    .pipe(gulp.dest('dist/css'));
});

// watch on compile
gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/styl/**/*.styl', ['stylus']);
});

// default task
gulp.task('build', ['clean', 'scripts-build', 'stylus-build']);
gulp.task('default', ['clean', 'scripts', 'stylus', 'watch']);

