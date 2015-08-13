/**
 *
 * Run: $ gulp
 *
 * */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "http://wp-theme-boilerplate.dev"
    });

    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("*.php").on('change', browserSync.reload);
    gulp.watch("**/*.php").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);