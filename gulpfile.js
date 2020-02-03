var gulp = require('gulp');
var sass = require('gulp-sass');


// var autoprefixer = require('gulp-autoprefixer');
// var browserSync = require('browser-sync').create();
// var useref = require('gulp-useref');
// var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
// var gulpIf = require('gulp-if');
// var cssnano = require('gulp-cssnano');
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');
// var del = require('del');
// var runSequence = require('run-sequence');

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: 'app'
//         },
//     })
// });

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass') // Gets all files ending with .scss in app/scss
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({
        //     browsers: ['last 4 versions'],
        //     cascade: false
        // }))
        .pipe(gulp.dest('./css'));
        // .pipe(browserSync.reload({
        //     stream: true
        // }));
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
      .pipe(uglifycss({
        // "maxLineLen": 80,
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });


  gulp.task('run', ['sass', 'css']);

  gulp.task('watch', function() {
      gulp.watch('./sass/*.sass', ['sass']);
      gulp.watch('./css/*.css', ['css']);
  });

  gulp.task('default', ['run', 'watch']);


  
// // Compress all images and move them to /dist/images
// gulp.task('images', function() {
//     return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//         // Caching images that ran through imagemin
//         .pipe(cache(imagemin({
//             interlaced: true
//         })))
//         .pipe(gulp.dest('dist/images'));
// });

// // Moves all fonts into /dist folder
// gulp.task('fonts', function() {
//     return gulp.src('app/fonts/**/*')
//         .pipe(gulp.dest('dist/fonts'));
// });

// // Gulp will delete the `dist` folder for you whenever gulp clean:dist is run.
// gulp.task('clean:dist', function() {
//     return del.sync('dist');
// });



// gulp.task('watch', ['browser-sync', 'sass'], function() {
//     gulp.watch('app/scss/**/*.scss', ['sass']);
//     gulp.watch('app/*.html', browserSync.reload);
//     gulp.watch('app/js/**/*.js', browserSync.reload);
// });

// gulp.task('build', function (callback) {
//   runSequence('clean:dist',
//     ['sass', 'useref', 'images', 'fonts'],
//     callback
//   )
// });

// gulp.task('default', function (callback) {
//     runSequence(['sass','browser-sync', 'watch'],
//         callback
//     )
// });
