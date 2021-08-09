/*
 * @Author: Aiden
 * @Date: 2021-08-06 13:47:46
 * @LastEditTime: 2021-08-06 14:33:13
 * @LastEditors: Aiden
 * @Description:
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  return src(['./src/*.scss'])
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

exports.build = series(compile)
