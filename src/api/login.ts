// 「Axios」入门到精通 https://www.jianshu.com/p/9359bf779376
// axios允许开发者传入一个配置对象，指定请求实现更多的功能。
import request from '@/utils/request';

// 获取登陆验证码的接口
export const getCode = (): any => {
  return request({
    url: 'api/auth/captcha',
    method: 'get',
  });
};
