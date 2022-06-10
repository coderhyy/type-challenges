// 参考 https://github.com/type-challenges/type-challenges/issues/6985
// 我不理解
type ExpandTwo<T extends any[]> = [...T, ...T];

type BinaryToDecimal<
  S extends string,
  R extends any[] = []
> = S extends `${infer L}${infer Rest}`
  ? L extends "0"
    ? BinaryToDecimal<Rest, ExpandTwo<R>>
    : BinaryToDecimal<Rest, [...ExpandTwo<R>, 0]>
  : R["length"];
