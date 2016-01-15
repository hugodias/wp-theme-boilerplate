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
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        proxy: "http://wptest.dev",
        port: 5000
    });

    gulp.watch("assets/sass/**/*.scss", ['sass']);
    gulp.watch("assets/coffee/**/*.coffee", ['coffee','js-minify-concat']);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("*.php").on('change', browserSync.reload);
    gulp.watch("**/*.php").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src("assets/sass/*.scss")
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('coffee', function () {
    return gulp.src('assets/coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('js-minify-concat', function(){
    return gulp.src('assets/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
})

gulp.task('default', ['serve']);
