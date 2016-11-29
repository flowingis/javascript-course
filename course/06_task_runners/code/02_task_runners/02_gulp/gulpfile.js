var gulp = require('gulp');
var connect = require('gulp-connect');
var useref = require('gulp-useref');
var cleanDest = require('gulp-clean-dest');

gulp.task('connect', function() {
    connect.server();
});

gulp.task('build', function () {
    return gulp.src('index.html')
        .pipe(cleanDest('build'))
        .pipe(useref())
        .pipe(gulp.dest('build'));
});