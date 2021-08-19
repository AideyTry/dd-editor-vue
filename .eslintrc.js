module.exports = {
    root: true,
    // parser: "babel-eslint", // 需要一个parser解析器来帮我们把源代码转成抽象语法树
    // 指定解析器选择
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: "module",
        ecmaVersion: 2015
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    rules: {
      // "no-console": "error",
      "no-console": "off"
    }
  };
  