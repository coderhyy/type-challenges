// 参考 https://github.com/type-challenges/type-challenges/issues/7295
type ObjectFromEntries<T extends [string, unknown]> = {
  [K in T as K[0]]: K[1];
};
