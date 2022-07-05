//「Axios」入门到精通 https://www.jianshu.com/p/9359bf779376
// axios允许开发者传入一个配置对象，指定请求实现更多的功能。
import request from '../utils/request';
// 获取登陆验证码的接口

export const getData = () => {
  return request({
    url: 'https://www.fastmock.site/mock/79155c34b66e2e12e61fafe774c73780/test/todos',
    method: 'get',
  });
};
