const {dest, src, parallel, series, watch} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const htmlMin = require('gulp-htmlmin');
const babel = require('gulp-babel');


function copyHtml(){
    return src('./src/index.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(dest('./dist'));
}

function copyCss(){
    return src('./src/style.css')
        .pipe(cleanCss())
        .pipe(dest('./dist'));
}

function copyJs(){
    return src(['./src/js/controller/*.js', './src/js/model/*.js', './src/js/view/*.js', './src/js/*.js'])
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./dist'));
}

function copyVendors(){
    return src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(concat('./vendors.js'))
        .pipe(dest('./dist'));
}

function watchFiles(cb){
    watch(['./src/js/controller/*.js', './src/js/model/*.js', './src/js/view/*.js', './src/js/*.js'], copyJs);
    watch('./src/style.css', copyCss);
    watch('./src/index.html', copyHtml);
    cb();
}

module.exports.build = parallel(copyHtml, copyCss, copyJs, copyVendors);
module.exports.watch = series(copyHtml, copyCss, copyJs, copyVendors, watchFiles);