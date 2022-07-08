// 环境变量写在代码中太冗余了，声明常量再导出
// 最后加的感叹号是非空断言
// constants常量采用全大写_连接明明

export const BASE_URL: string = process.env.REACT_APP_BASE_URL!;
