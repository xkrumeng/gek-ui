const { src, dest, series } = require('gulp')
const postcss = require('gulp-postcss')
const dartSass = require('gulp-dart-sass')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

var plugins = [
  autoprefixer({overrideBrowserslist: ['last 3 version']}),
  cssnano()
];

function compileStyle() {
  return src('../packages/theme-chalk/index.scss')
    .pipe(dartSass.sync())
    .pipe(postcss(plugins))
    .pipe(dest('../dist/theme-chalk'))
}

exports.build = series(compileStyle);