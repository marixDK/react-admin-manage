// 代码质量规范，更改代码后要重新运行才能生效
module.exports = {
  env: {
    // 运行环境：浏览器，es6+语法，node
    browser: true,
    es2021: true,
    node: true,
  },
  // extends 的顺序后面会覆盖前面，prettier的配置必须放在最后
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    // allow debugger during development
    "no-debugger": process.env.REACT_APP_ENV === "prod" ? "error" : "off",
    "no-console": process.env.REACT_APP_ENV === "prod" ? "error" : "off",
    // 不符合prettier风格的代码警告
    "prettier/prettier": [
      "warn",
      {
        // singleQuote: true, 使用单引号
      },
    ],
    // "indent": ["error", 4],
  },
};
