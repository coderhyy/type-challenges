// 这题的坑点在于 number[]['length'] = number
// 好像下面的写法可以避免上面的情况
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends []
  ? true
  : T extends readonly [unknown]
  ? true
  : false;
