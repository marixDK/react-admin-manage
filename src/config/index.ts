// 环境变量写在代码中太冗余了，声明常量再导出
// 最后加的感叹号是非空断言

export const BASE_URL: string = process.env.REACT_APP_BASE_URL!;
