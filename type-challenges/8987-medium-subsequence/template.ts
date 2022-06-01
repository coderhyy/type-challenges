// 参考 https://github.com/type-challenges/type-challenges/issues/9091
type Subsequence<T extends any[]> = T extends [infer F, ...infer TRest]
  ? [F] | Subsequence<TRest> | [F, ...Subsequence<TRest>]
  : T;
