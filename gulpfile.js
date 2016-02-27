var gulpConfig = require('./gulpConfig')();

var gulp = require('gulp'),   
    watch = require('gulp-watch'),  
    sass  = require('gulp-sass'),
    server = require('gulp-server-livereload');
    


//******************************************************************************
//task to convert SCSS files to CSS files
gulp.task('sass',function(){  
  gulp.src(gulpConfig.sourceDir+'/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(gulpConfig.sourceDir+'/css/'));
});

gulp.task('justReload',function() {
   console.log('for JS change, we just relaoding the page');
});

gulp.task('webserver', function() {
  gulp.src(gulpConfig.sourceDir)
    .pipe(server({
      livereload: true,
      directoryListing:true,
      open: true
    }));
});


//keep track of all files 
gulp.task('watch', function () {
    gulp.watch(gulpConfig.sourceDir+'/sass/**/*.{css,scss}', ['sass']);
    gulp.watch(gulpConfig.sourceDir+'/js/*.js', ['justReload']);    
});




gulp.task('dev', ['sass','webserver','watch'],function(){
  console.log('Templates are running from ', gulpConfig.sourceDir);
});