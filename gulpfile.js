/**
 * Created by Larry on 2015/5/14.
 */
var gulp = require('gulp'),connect = require('gulp-connect');
gulp.task('server',function(){
   connect.server({
       livereload:true
   });
});
gulp.task('watch',function(){
   gulp.watch('*',['index']);
    gulp.watch('controller/*.js',['controller']);
    gulp.watch('directive/*.js',['directive']);
    gulp.watch('lang/*.json',['lang']);
    gulp.watch('style/*.css',['css']);
});
gulp.task('index',function(){
    gulp.src(['*.js','*.html']).pipe(connect.reload());
});
gulp.task('controller',function(){
   gulp.src('controller/*.js').pipe(connect.reload());
});
gulp.task('directive',function(){
    gulp.src('directive/*.js').pipe(connect.reload());
});
gulp.task('lang',function(){
    gulp.src('lang/*.json').pipe(connect.reload());
});
gulp.task('css',function(){
    gulp.src('style/*.css').pipe(connect.reload());
});

gulp.task('default',['server','watch']);