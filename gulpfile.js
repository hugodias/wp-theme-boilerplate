/**
 *
 * Run: $ gulp
 *
 * */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        proxy: "http://wptest.dev"
    });

    gulp.watch("assets/sass/**/*.scss", ['sass']);
    gulp.watch("assets/coffee/**/*.coffee", ['coffee']);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("*.php").on('change', browserSync.reload);
    gulp.watch("**/*.php").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src("assets/sass/*.scss")
        .pipe(sass().on('error', gutil.log))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('coffee', function () {
    gulp.src('assets/coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('default', ['serve']);
