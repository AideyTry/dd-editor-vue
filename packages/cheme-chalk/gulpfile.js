/*
 * @Author: Aiden
 * @Date: 2021-08-06 13:47:46
 * @LastEditTime: 2021-08-09 13:44:35
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

// 处理字体图标
function copyfont() {
  return src(`./src/fonts/**`)
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont)
