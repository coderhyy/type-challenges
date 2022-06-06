// 参考 https://github.com/type-challenges/type-challenges/issues/9847

export type Join<
  T extends unknown[],
  D extends string,
  S extends string = ""
> = T extends [infer F, ...infer Rest]
  ? Join<Rest, D, `${S}${D}${F & string}`>
  : S extends `${D}${infer Str}`
  ? Str
  : S;

export declare function join<D extends string>(
  delimiter: D
): <P extends string[]>(...parts: P) => Join<P, D>;
