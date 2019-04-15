'use strict';

var gulp  = require('gulp');
var sass  = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = 'src/Assets/SCSS/*.scss'; // *: looks for any files with .scss in that dir
var SCSS_DEST = 'src/Assets/CSS';

gulp.task('compile_scss', function(){

    gulp.src(SCSS_SRC)              // creates string of readable files
    .pipe(sass().on('error', sass.logError)) // compiles into std CSS
    .pipe(minifyCSS())                      // miniature
    .pipe(rename({ suffix: '.min' }))       // file extension name
    .pipe(changed(SCSS_DEST))               // only affecting changed files
    .pipe(gulp.dest(SCSS_DEST))             // output to dest

    // pipe: chains tasks together
});


// Detect changes in CSS
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, gulp.series('compile_scss'));  // passed an array so multiple tasks can be added
});

// Run tasks
gulp.task('default', gulp.series('watch_scss'));



/*
function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask

  */