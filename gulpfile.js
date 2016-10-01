// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

// File paths to various assets are defined here.
var PATHS = {
  coffee: [
    // "js/coffee/product.coffee",
  ]
};

// Compile Our Sass
// gulp.task('sass', function() {
//     var onError = function(err) {
//         notify.onError({
//             title:    "SCSS",
//             message:  "Compilation error!",
//             sound:    "Beep"
//         })(err);

//         console.log(err);
//         this.emit('end');
//     };

//     return gulp.src('scss/main.scss')
//         .pipe(plumber({errorHandler: onError}))
//         .pipe(sass({outputStyle: 'compressed'}))
//         .pipe(rename('styles.min.css'))
//         .pipe(gulp.dest('css/'))
//         .pipe(notify({title: "SCSS", message: "compilation [OK]"}))
// });

//Creates a local server on port 8000
gulp.task('connect', function() {
  connect.server({
    name: 'local dev',
    port: 8000,
    livereload: true
  });
});

// Default Task
// gulp.task('default', ['sass', 'connect'], function() {
gulp.task('default', ['connect'], function() {
    // Watch Files For Changes
    // gulp.watch('scss/**/*.scss', ['sass']);
});