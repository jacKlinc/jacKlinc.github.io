const gulp  = require('gulp');
const sass  = require('gulp-sass');
const browserSync = require('browser-sync').create();

// var minifyCSS = require('gulp-minify-css');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var changed = require('gulp-changed');

var SCSS_SRC = './src/Assets/SCSS/*.scss'; // *: looks for any files with .scss in that dir
var SCSS_DEST = './src/A ssets/CSS';
var HTML_DEST = './public';
var JS_DEST = './src';

function style(){
    // 1. Where is SCSS file?
    return gulp.src(SCSS_SRC)
    // 2. Pass file through sass compiler
        .pipe(sass())
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




// gulp.task('compile_scss', function(){

//     gulp.src(SCSS_SRC)              // creates string of readable files
//     .pipe(sass().on('error', sass.logError)) // compiles into std CSS
//     .pipe(minifyCSS())                      // miniature
//     .pipe(rename({ suffix: '.min' }))       // file extension name
//     .pipe(changed(SCSS_DEST))               // only affecting changed files
//     .pipe(gulp.dest(SCSS_DEST))             // output to dest

//     // pipe: chains tasks together
// });

