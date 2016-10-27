const gulp    = require('gulp');
const yaml    = require('gulp-yaml-validate');

gulp.task('yaml', () => {
  return gulp.src("**/*.yaml")
    .pipe(yaml());
});
gulp.task('default', ['yaml'])
