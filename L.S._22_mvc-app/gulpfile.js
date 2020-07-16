const {dest, src, parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const cleanCss = require('gulp-clean-css');
const htmlMin = require('gulp-htmlmin');

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
    return src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./dist'));
}

function copyVendors(){
    return src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(concat('./vendors.js'))
        .pipe(dest('./dist'));
}

module.exports.build = parallel(copyHtml, copyCss, copyJs, copyVendors);