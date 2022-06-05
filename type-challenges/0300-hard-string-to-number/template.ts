// 参考 https://github.com/type-challenges/type-challenges/issues/9656
type ToNumber<
  S extends string,
  R extends unknown[] = []
> = S extends `${R["length"]}` ? R["length"] : ToNumber<S, [...R, 0]>;
