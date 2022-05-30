// 参考：https://github.com/type-challenges/type-challenges/issues/8170
type Zip<
  T extends unknown[],
  U extends unknown[],
  Res extends unknown[] = []
> = T extends [infer TF, ...infer TRes]
  ? U extends [infer UF, ...infer URes]
    ? Zip<TRes, URes, [...Res, [TF, UF]]>
    : Res
  : Res;
