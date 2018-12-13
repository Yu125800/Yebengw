// gulp fileinclude 打包命令

var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
    gulp.src(['./src/*.html'])//主文件
        .pipe(fileinclude({
            prefix: '@@',//变量前缀 @@include
            basepath: './src/_include',//引用文件路径
            indent:true//保留文件的缩进
            
        }))
        .pipe(gulp.dest('./yeben'));//输出文件路径
      
});
