const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const concat = require('gulp-concat')
const minify = require('gulp-minify')
const sass = require('gulp-sass')

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task   -- define taks
    gulp.src    -- point to files to use
    gulp.dest   -- point to folder to output
    gulp.watch  -- watch files and folders for changes
    done        --     
*/

//? Copy all HTML files
gulp.task('copyHtml', async () => {
  gulp.src('src/*.html').pipe(gulp.dest('dist'))
})

//? Optimise images
gulp.task('imagemin', async () => {
  gulp
    .src('src/images/*/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/optimised'))
})

//? Concat & Minify JS
gulp.task('concat', async () => {
  gulp
    .src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
})

//? Compile SCSS
gulp.task('scss', async () => {
  gulp.src('src/scss/*.scss').pipe(sass()).pipe(gulp.dest('dist/css'))
})

//? All tasks
gulp.task('default', gulp.parallel(['copyHtml', 'imagemin', 'concat', 'scss']))

//? Watch files
gulp.task('watch', async () => {
  gulp.watch('src/js/*.js', gulp.parallel(['concat']))
  gulp.watch('src/images/*', gulp.parallel(['imagemin']))
  gulp.watch('src/scss/*.scss', gulp.parallel(['scss']))
  gulp.watch('src/*.html', gulp.parallel(['copyHtml']))
})
