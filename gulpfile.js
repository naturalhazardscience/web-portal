/*
 * Project - Letstart - Onepage template
 * Author - MatrrDigital
 * Support email: gagan.uideveloper@gmail.com and support@matrrdigital.com
 */

var gulp = require('gulp'); //default
var sass = require('gulp-sass');//sass complie
var concat = require('gulp-concat'); //concat file into one file
var concatCss = require('gulp-concat-css');//compile css plugins into one file
var watch = require('gulp-watch'); //sass compile to css
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
  return gulp.src('app/assets/scss/**/*.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('app/assets/dist/css/'))
    .pipe(browserSync.stream())
});

gulp.task('watch', gulp.series('sass', (done) => {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  gulp.watch('app/assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('app/*.html').on("change", browserSync.reload);
  gulp.watch('app/assets/dist/js/**/*.js').on("change", browserSync.reload);
  done();
}));

/*
 * JS FILES COMPILE USING GULP CONCAT
 * ALL COMMON PLUGINS USE INTO THE TEMPLATE
 */
gulp.task('concatJS', () => {
  return gulp.src(
    [
      'app/assets/vendors/polyfills/js/polyfills.min.js',
      'app/assets/vendors/jQuery/js/jquery.min.js',
      'app/assets/vendors/scrollit/js/scrollIt.min.js',
      'app/assets/vendors/owl-carousel/js/owl.carousel.min.js',
      'app/assets/vendors/slick/js/slick.min.js',
      'app/assets/vendors/aos/js/aos.min.js',
      'app/assets/vendors/counterup/js/jquery.counterup.min.js',
      'app/assets/vendors/counterup/js/waypoints.min.js',
      'app/assets/vendors/jquery-validation/js/jquery.validate.min.js',
      'app/assets/vendors/jquery-validation/js/additional-methods.min.js',
      'app/assets/vendors/PhotoSwipe-master/dist/photoswipe-ui-default.min.js',
      'app/assets/vendors/PhotoSwipe-master/dist/photoswipe.min.js',
      'app/assets/vendors/shuffle-js/js/suffle.min.js',
      'app/assets/vendors/typed/js/typed.min.js',
      'app/assets/vendors/vivus-svg/js/vivus.js',
      'app/assets/vendors/swiper/js/swiper.min.js',
      'app/assets/vendors/bootstrap/dist/js/bootstrap.bundle.min.js',
      'app/assets/vendors/animated-headline/js/animation.headline.js',
      'app/assets/vendors/smoothscroll/js/SmoothScroll.min.js',
    ])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('app/assets/dist/js/'));
});

/*
 * Css plugins FILES COMPILE INTO ONE FILE USING GULP CONCATCSS
 * ALL COMMON PLUGINS USE INTO THE TEMPLATE
 * You can also include seprate file into top of html in <HEAD> tag
 * Like this
 * <link rel="stylesheet" href="assets/vendors/bootstrap/dist/css/bootstrap.min.css">
 * <link rel="stylesheet" href="assets/vendors/animate/animate.min.css"> <!-- Animate css -->
 */

gulp.task('concatCSS', () => {
  return gulp.src([
    'app/assets/vendors/animate/animate.min.css',
    'app/assets/vendors/slick/css/slick.css',
    'app/assets/vendors/owl-carousel/css/owl.carousel.min.css',
    'app/assets/vendors/PhotoSwipe-master/dist/photoswipe.min.css',
    'app/assets/vendors/aos/css/aos.min.css',
    'app/assets/vendors/swiper/css/swiper.min.css',
    'app/assets/vendors/bootstrap/dist/css/bootstrap.min.css'
  ])
    .pipe(concatCss("plugins.css"))
    .pipe(gulp.dest('app/assets/dist/css/'));
});