var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./source/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});



gulp.task('pug', function buildHTML() {
    return gulp.src('./source/templates/*.pug')
        .pipe(pug({
            // Your options in here
            pretty: true
        }))
        .pipe(gulp.dest('./build'));
});


gulp.task('serve', ['sass', 'pug'], function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch('./source/sass/main.scss', ['sass']);
    gulp.watch('./source/templates/**/*.pug', ['pug']);
    gulp.watch(["build/*.html", "build/css/*.css"]).on('change', browserSync.reload);
});

// gulp.task('pug:watch', function () {
//     gulp.watch('./source/templates/*.pug', ['pug']);
// });
// gulp.task('sass:watch', function () {
//     gulp.watch('./source/sass/main.scss', ['sass']);
// });


// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./build"
//         }
//     });
// });