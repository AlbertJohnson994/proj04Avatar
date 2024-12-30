// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const imagemin = require('gulp-imagemin');
// const uglify = require('gulp-uglify');

// // Define paths
// const paths = {
//     styles: {
//         src: './src/styles/*.scss',
//         dest: './dist/css',
//     },
//     scripts: {
//         src: './src/scripts/*.js',
//         dest: './dist/js',
//     },
//     images: {
//         src: './src/images/**/*',
//         dest: './dist/images',
//     },
// };

// // Compile Sass
// function styles() {
//     return gulp.src(paths.styles.src)
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(gulp.dest(paths.styles.dest));
// }

// // Minify JavaScript
// function scripts() {
//     return gulp.src(paths.scripts.src)
//         .pipe(uglify())
//         .pipe(gulp.dest(paths.scripts.dest));
// }

// // Optimize images
// function images() {
//     return gulp.src(paths.images.src)
//         .pipe(imagemin())
//         .pipe(gulp.dest(paths.images.dest));
// }

// // Watch for changes
// function watchFiles() {
//     gulp.watch(paths.styles.src, styles);
//     gulp.watch(paths.scripts.src, scripts);
//     gulp.watch(paths.images.src, images);
// }

// // Export tasks
// exports.styles = styles;
// exports.scripts = scripts;
// exports.images = images;
// exports.watch = watchFiles;

// // Default task
// exports.default = gulp.parallel(styles, scripts, images, watchFiles);



const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}


function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css/'));
}

function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}