const { src, dest, watch, series, parallel } = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin');

sass.compiler = require('node-sass');

const config = {
	app: {
		js: ['./src/js/**/*.js'],
		scss: './src/sass/**/*.scss',
		images: './src/img/*.*',
		html: './src/index.html',
		css: './src/css/style.css',
		mainCss: './src/css',
		mainSass: './src/sass/**/*.scss',
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

function concatScripts() {
	return src(config.app.js)
		.pipe(concat('app.js'))
		.pipe(dest(config.dist.baseJS));
}

function minifyScripts() {
	return src(config.app.js)
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
	return src('src/sass/style.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(dest('src/css'));
}

function minifyHTML() {
	return src(config.app.html)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest(config.dist.base));
}

function minifyImage() {
	return src('./src/img/**/*')
		.pipe(imagemin())
		.pipe(dest(config.dist.baseIMG));
}

function watchSass() {
	watch('/src/sass/**/*.scss', parallel(compileSass));
}

function clean() {
	del(['dist', 'css/style.css*', 'js/app*.js*']);
}

// gulp.task(
// 	'build',
// 	['concatScripts', 'minifyScripts', 'compileSass', 'minifyImage', 'minifyHTML', 'minCSS'],
// 	function() {
// 		return gulp
// 			.src(['css/*.min.css', 'js/app.min.js', 'img/**'], { base: './' })
// 			.pipe(gulp.dest('dist'));
// 	},
// ); //Use task 3 times

exports.clean = series(clean);
exports.minifyImage = series(minifyImage);
exports.build = series(concatScripts, minifyScripts, compileSass, minifyImage, minifyHTML, minCSS);
exports.watch = series(watchSass);

// gulp.task('default', ['clean']); // clean all your tasks

// const { src, dest, watch, series, parallel } = require('gulp');
// const cssnano = require('cssnano');
// const concat = require('gulp-concat');
// const postcss = require('gulp-postcss');
// const replace = require('gulp-replace');
// const sass = require('gulp-sass');
// const autoprefixer = require('autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');
// const uglify = require('gulp-uglify');

// const files = {
// 	scssPath: 'src/sass/**/*.scss',
// 	jsPath: 'src/js/**/*.js',
// };

// function scssTask() {
// 	return src(files.scssPath)
// 		.pipe(sourcemaps.init())
// 		.pipe(sass())
// 		.pipe(postcss([autoprefixer(), cssnano()]))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(dest('dist'));
// }

// function jsTask() {
// 	return src(files.jsPath)
// 		.pipe(concat('main.js'))
// 		.pipe(uglify())
// 		.pipe(dest('dist'));
// }

// const cbString = new Date().getTime();
// function cacheBustTask() {
// 	return src([index.html])
// 		.pipe(replace(/cb=\d+/g, 'cb=' + cbString))
// 		.pipe(dest('.'));
// }

// function watchTask() {
// 	watch([files.scssPath, files.jsPath], parallel(scssTask, jsTask));
// }

// exports.default = series(parallel(scssTask, jsTask), cacheBustTask, watchTask);
