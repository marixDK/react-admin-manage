/* config-overrides.js */
const path = require('path')
const { override, addWebpackAlias, addLessLoader } = require('customize-cra');

/* config-overrides.js */
module.exports = override(
  // 设置别名路径
  addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
  })
)