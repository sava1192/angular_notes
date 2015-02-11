'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');


gulp.task('sass', function() {
    gulp.src('styles/*.scss').
        pipe(sass()).
        on('error', console.log).
        pipe(gulp.dest('build/styles')).
        pipe(concat('./build/styles.css')).
        pipe(gulp.dest('./'));
});
gulp.task('watch', function() {
    gulp.watch('styles/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
