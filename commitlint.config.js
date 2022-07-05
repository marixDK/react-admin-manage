// commitlint.config.js里自定义配置
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'], // body上面要有换行
    'footer-leading-blank': [1, 'always'], // footer上面要有换行
    'header-max-length': [2, 'always', 72], // header 最长72个字符
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'], //subject位不能为null
    'type-empty': [2, 'never'], //type位不能为null
    'type-enum': [
      // type提交规则
      2,
      'always',
      [
        'feat', // 新增功能
        'del', // 删除功能
        'fix', // 修复bug
        'perf', // 优化相关，比如提升性能、体验
        'refactor', // 代码重构
        'test', // 测试用例
        'docs', // 文档更新
        'revert', // 回滚版本
        'style', // 代码格式修改（如修改空白字符，补全缺失的分号）
        'chore', // 对架构流程或辅助工具和依赖库的修改
      ],
      // git commit -m 'add: 增加 xxx 功能'
    ],
  },
};
