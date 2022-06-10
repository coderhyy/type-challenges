// 参考 https://github.com/type-challenges/type-challenges/issues/4359
type Split<
  S extends string,
  SEP extends string
> = S extends `${infer F}${SEP}${infer R}`
  ? [F, ...Split<R, SEP>]
  : S extends `${infer K}`
  ? SEP extends ""
    ? []
    : [K]
  : string[];
