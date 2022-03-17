/* config-overrides.js */
const path = require("path");
const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy,
  adjustStyleLoaders,
} = require("customize-cra");

/* config-overrides.js */
module.exports = override(
  // 设置别名路径
  addWebpackAlias({
    //路径别名
    "@": path.resolve(__dirname, "src"),
  }),
  // 配置装饰器
  addDecoratorsLegacy(),
  // 配置指定文件为sass全局文件，可以不用导入就可以使用
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: ["./src/style/global.scss"],
        },
      });
    }
  })
);
