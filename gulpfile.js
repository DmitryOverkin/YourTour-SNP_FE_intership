const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();


const paths = {
    styles: {
        src: 'styles/index.scss',
        dest: 'dist/css/'
    },
    html: {
        src: './*.html'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream());
  }

function serve(){
    browserSync.init({
        server: './'
    })

    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}

exports.styles = styles;
exports.serve = gulp.series(styles, serve);

