// 先通过递归将字符串转化为数组，再通过数组的 length 属性获取数组长度
type LengthOfString<
  S extends string,
  U extends unknown[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...U, First]>
  : U["length"];
