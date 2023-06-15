const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const codigo = require('gulp-uglify');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagem(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeCodigos(){
    return gulp.src('./source/scripts/*.js')
        .pipe(codigo())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){ 
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false},gulp.series(compilaSass));
    gulp.watch('./source/images/*',{ignoreInitial: false},gulp.series(comprimeImagem));
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false},gulp.series(comprimeCodigos));
}