const gulp  = require('gulp');
const sass  = require('gulp-sass');
const browserSync = require('browser-sync').create();

var SCSS_SRC = './SCSS/*.scss'; // *: looks for any files with .scss in that dir
var SCSS_DEST = './CSS';
var HTML_DEST = './*.html';
var JS_DEST = './src/**/*.js';

function style(){
    // 1. Where is SCSS file?
    return gulp.src(SCSS_SRC)
    // 2. Pass file through sass compiler
        .pipe(sass().on('error', sass.logError))
    // 3. Where to save generated CSS
        .pipe(gulp.dest(SCSS_DEST))
    // 4. Stream all changes to browser 
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './' // sets server up in base directory (/my-app)
        }
    });
    gulp.watch(SCSS_SRC, style)   // if any change is made to SCSS file, call style
    gulp.watch(HTML_DEST).on('change', browserSync.reload); // auto reload on HTML
    gulp.watch(JS_DEST).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;