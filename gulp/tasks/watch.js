module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/static/stylus/**/*.styl', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
        $.gulp.watch(['./src/images/general/**/*.{png,jpg,gif}',
                     './src/images/content/**/*.{png,jpg,gif}'], $.gulp.series('images:src'));
    });
};