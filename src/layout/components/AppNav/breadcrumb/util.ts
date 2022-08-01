export const getRouteItem = (arr, queryItem) => {
  // ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，
  // keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
  for (const { path, name, children } of arr) {
    console.log(queryItem);
    console.log(path);
  }
};
