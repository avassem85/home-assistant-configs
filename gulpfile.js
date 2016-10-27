const gulp    = require('gulp');
const yaml    = require('gulp-yaml-validate');
var replace = require('gulp-replace');

gulp.task('yaml', () => {
  return gulp.src("**/*.yaml")
    .pipe(replace('!secret ', ''))
    .pipe(replace('!include_dir_merge_named ', ''))
    .pipe(replace('!include ', ''))
    .pipe(replace('!include_dir_named ', ''))
    .pipe(yaml());
});

gulp.task('deploy', function() {
    gulp.src("**/*.yaml")
    .pipe(gulp.dest('//RASPBERRYPI/home assistant'));
});

gulp.task('default', ['yaml'])
