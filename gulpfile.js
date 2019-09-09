const { src, dest, watch, series, parallel } = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  replace = require('gulp-replace');

sass.compiler = require('node-sass');

const config = {
  app: {
    js: './src/js/**/*.js',
    scss: './src/sass/**/*.scss',
    images: './src/img/*.*',
    html: './src/index.html',
    css: './src/css/style.css',
    mainCss: './src/css',
    img: './src/img/**/*',
  },
  dist: {
    base: './dist/',
    baseJS: './dist/js',
    baseIMG: './dist/img',
    baseCSS: './dist/css',
    images: './dist/img',
  },
  extraBundles: ['./dist/main.js', './dist/main.css'],
};

function minifyScripts() {
  return src(config.app.js)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(dest(config.dist.baseJS));
}

function minCSS() {
  return src(config.app.css)
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(dest(config.dist.baseCSS));
}

function compileSass() {
  return src(config.app.scss)
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(maps.write('./'))
    .pipe(dest(config.app.mainCss));
}

function minifyHTML() {
  return src(config.app.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(replace('style.css', 'style.min.css'))
    .pipe(replace('app.js', 'app.min.js'))
    .pipe(dest(config.dist.base));
}

function animateCss() {
  return src('./src/css/animate.min.css').pipe(dest('dist/css'));
}

function minifyImage() {
  return src(config.app.img)
    .pipe(imagemin())
    .pipe(dest(config.dist.baseIMG));
}

function watchSass() {
  watch(config.app.scss, parallel(compileSass));
}

function clean() {
  del(['dist', 'css/style.css*', 'js/app*.js*']);
}

exports.clean = series(clean);
exports.build = series(minifyScripts, compileSass, minifyImage, minifyHTML, minCSS, animateCss);
exports.watch = series(watchSass);
