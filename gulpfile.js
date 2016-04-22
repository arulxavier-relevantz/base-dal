var gulp = require("gulp");
var gulpTypings = require("gulp-typings");
var ts = require('gulp-typescript');

gulp.task("default", ["installTypings", "compileDAO", "compileRepo", "compileIndex"]);

gulp.task("compileDAO", function () {
  return gulp
    .src("lib/dao/*.ts")
    .pipe(ts({
        module: "commonjs",
        target: "ES5",
        sourcemap: false,
        logErrors: true
    }))
    .pipe(gulp.dest("lib/dao"))    
});

gulp.task("compileRepo", function () {
  return gulp
    .src("lib/repository/*.ts")
    .pipe(ts({
        module: "commonjs",
        target: "ES5",
        sourcemap: false,
        logErrors: true
    }))
    .pipe(gulp.dest("lib/repository"))    
});

gulp.task("compileIndex", function () {
  return gulp
    .src("*.ts")
    .pipe(ts({
        module: "commonjs",
        target: "ES5",
        sourcemap: false,
        logErrors: true
    }))
    .pipe(gulp.dest("."))    
});

gulp.task("installTypings",function(){
    gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline. 
});

