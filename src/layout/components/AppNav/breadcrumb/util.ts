export const getRouteItem = (arr, queryItem, list = []) => {
  // ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，
  // keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
  for (const item of arr) {
    console.log(item);
    const { path, children } = item;
    if (queryItem.includes(path)) list.push(item);
    if (children) {
      getRouteItem(children, queryItem, list);
    }
  }
  // ES6数组过滤filter，过滤掉path为/选项
  list = list.filter((item) => item.path !== '/');
  return list;
};
