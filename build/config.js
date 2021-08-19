var Components = require('../components.json')

var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`dd-editor-vue/packages/${key}`] = `dd-editor-vue/lib/${key}`
})

externals = [
  Object.assign(
    {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
      },
    },
    externals
  ),
]

exports.externals = externals
