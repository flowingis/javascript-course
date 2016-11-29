var gulp = require('gulp');
var connect = require('gulp-connect');
var useref = require('gulp-useref');
var cleanDest = require('gulp-clean-dest');

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('build', function () {
    return gulp.src('index.html')
        .pipe(cleanDest('build'))
        .pipe(useref())
        .pipe(gulp.dest('build'));
});


gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);