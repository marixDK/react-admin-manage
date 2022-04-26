// .eslintrc.js
module.exports = {
  env: {
    // 运行环境：浏览器，es6+语法，node
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser", // 解决报错 Parsing error: Unexpected token (  )或者： )
  parserOptions: {
    sourceType: "module", // 解决报错 'import' and 'export' may appear only with 'sourceType: module'
    parser: "babel-eslint",
  },

  rules: {
    // "indent": ["error", 4],
  },
};
