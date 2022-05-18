// 通过递归处理剩余部分 有点不好理解...
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer L}`
  ? `${F}${To}${ReplaceAll<L, From, To>}`
  : S;
