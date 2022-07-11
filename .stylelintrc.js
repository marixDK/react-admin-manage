// 配置对象
module.exports = {
  // stylelint-config-standard-scss：scss共享配置
  // stylelint-config-prettier-scss：关闭prettier中冲突的规则
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    // 禁止使用未知的伪元素
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-descending-specificity': null,
    // 禁止给值添加浏览器引擎前缀
    'value-no-vendor-prefix': null,
  },
};
