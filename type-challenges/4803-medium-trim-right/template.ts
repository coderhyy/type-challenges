// 原理和 TrimLeft 一样
type TrimRight<S extends string> = S extends `${infer Res}${" " | "\n" | "\t"}`
  ? TrimRight<Res>
  : S;
