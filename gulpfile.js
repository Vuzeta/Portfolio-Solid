var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin');

    gulp.task('concatScripts', function() {
    gulp.src(['js/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'))
});

gulp.task('minifyScripts', function() {
    gulp.src(['js/app.js'])
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'))
});

gulp.task('minifyHTML', function () {
    gulp.src('index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('compileSass', function() {
    gulp.src('sass/style.scss')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'))
});

gulp.task('minifyHTML', function() {
    return gulp.src('index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
  });

gulp.task('minifyImage', () =>
    gulp.src('img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
);

gulp.task('watchFiles', function() {
    gulp.watch('sass/**/*.scss', ['compileSass']);
});

gulp.task('clean', function() {
    del(['dist', 'css/style.css*', 'js/app*.js*']);
});

gulp.task('build', ['concatScripts','minifyScripts','compileSass', 'minifyImage', 'minifyHTML'], function() {
    return gulp.src(["css/*.css", "js/app.min.js", "img/**"], { base: './'})
        .pipe(gulp.dest('dist'))}); //Use task 3 times

gulp.task('default', ['clean']); // clean all your tasks