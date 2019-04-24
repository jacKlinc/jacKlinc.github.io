const gulp  = require('gulp');
const sass  = require('gulp-sass');
//const browserSync = require('browser-sync').create();
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

var SCSS_SRC = './src/Assets/SCSS/*.scss'; // *: looks for any files with .scss in that dir
var SCSS_DEST = './src/Assets/CSS';

function style(){

    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min'}))
        //.pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST))

}

function watch(){  // this watches files so need to change scss file for effect

    gulp.watch(SCSS_SRC, style)   // if any change is made to SCSS file, call style
    //gulp.watch(HTML_DEST).on('change', browserSync.reload); // auto reload on HTML
    //gulp.watch(JS_DEST).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.default = watch;