// 参考：https://github.com/type-challenges/type-challenges/issues/8196
type Without<T extends unknown[], U, Res extends unknown[] = []> = T extends [
  infer F,
  ...infer TRes
]
  ? F extends (U extends unknown[] ? U[number] : U)
    ? Without<TRes, U, Res>
    : Without<TRes, U, [...Res, F]>
  : Res;
