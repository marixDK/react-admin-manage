/* config-overrides.js */
const path = require('path')
const { override, addWebpackAlias, addPostcssPlugins, addDecoratorsLegacy } = require('customize-cra');

/* config-overrides.js */
module.exports = override(
  // 设置别名路径
  addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
  }),
  addPostcssPlugins([
    require('tailwindcss'),
    require('autoprefixer')
  ]),
  // 配置装饰器
  addDecoratorsLegacy
)