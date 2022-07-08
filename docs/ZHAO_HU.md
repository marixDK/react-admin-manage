# 外部跳转LeanStar招乎手机应用方式

> - 方式1、招呼协议（推荐）
> - 方式2、LeanStar招乎手机应用域名

## 1、招呼协议跳转

### 参考文档
> - [招乎链接跳转规范](http://open-zhaohu.paas.cmbchina.com/#/MarkDownContent?id=BC9A1BC3-43BD-425F-8D9D-754C9692522E&title=%E6%8B%9B%E4%B9%8E%E9%93%BE%E6%8E%A5%E8%B7%B3%E8%BD%AC%E8%A7%84%E8%8C%83)
> - [App客户端开放协议](http://open-zhaohu.paas.cmbchina.com/#/MarkDownContent?id=BC9A1BC3-43BD-425F-8D9D-754C9692522E&title=%E6%8B%9B%E4%B9%8E%E9%93%BE%E6%8E%A5%E8%B7%B3%E8%BD%AC%E8%A7%84%E8%8C%83)

### 生成跳转地址代码示例
```js
var prodConfig = {
  "webType": "3",
  "webUrl": "https://leanstar-mobile.paas.cmbchina.com/login",
  "query": {
    "target": "timeCardHistory"
  }
};

var devConfig = {
  "webType": "3",
  "webUrl": "http://leanstar-mobile-dev.paas.cmbchina.cn/login",
  "query": {
    "target": "timeCardHistory"
  }
};

var toBase64 = (value) => {
  const {btoa} = window;
  return encodeURIComponent(btoa(JSON.stringify(value)));
};

var configWithBase64 = toBase64(devConfig);

console.log(`CMBMobileOA:///?sysId=LeanStar&webConfig=${configWithBase64}`);
```

## 2、LeanStar招乎手机应用域名跳转

```js
`${host}/login?target=xxx&data=xxx&token=xxx` 
```

tip : 需要注意 http 和 https, 否则会出现部分手机打开非常慢的情况