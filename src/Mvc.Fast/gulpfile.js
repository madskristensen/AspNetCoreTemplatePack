/// <binding BeforeBuild='default' Clean='clean' ProjectOpened='watch' />

var del = require("del"),
    gulp = require("gulp"),
    concat = require("gulp-concat"),
    csso = require("gulp-csso"),
    uglify = require("gulp-uglify");

var files = {
    cssInput: "assets/css/",
    cssOutput: "wwwroot/css/",
    jsInput: "assets/js/",
    jsOutput: "wwwroot/js/"
};

gulp.task("default", ["css:min", "js:min"]);
gulp.task("clean", ["css:clean", "js:clean"]);

gulp.task("watch", ["default"], function () {
    gulp.watch(files.cssInput + "*.css", ["css"]);
    gulp.watch(files.jsInput + "*.js", ["js"]);
});

// CSS
gulp.task("css:min", function () {
    gulp.src(files.cssInput + "abovethefold.css")
        .pipe(csso())
        .pipe(gulp.dest(files.cssOutput));

    return gulp.src([files.cssInput + "*.css", "!" + files.cssInput + "abovethefold.css"])
        .pipe(concat("all.css"))
        .pipe(csso())
        .pipe(gulp.dest(files.cssOutput));
});

gulp.task("css:clean", function () {
    return del(files.cssOutput);
});

// JavaScript
gulp.task("js:min", function () {
    return gulp.src([files.jsInput + "/*.js"])
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest(files.jsOutput));
});

gulp.task("js:clean", function () {
    return del(files.jsOutput);
});