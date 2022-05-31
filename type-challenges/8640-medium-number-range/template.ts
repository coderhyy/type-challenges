// 参考 https://github.com/type-challenges/type-challenges/issues/9084
type NumberRange<
  L extends number,
  H extends number,
  Idx extends 1[] = L extends 0 ? [] : [1, 1],
  Res = never
> = Idx["length"] extends H
  ? H | Res
  : NumberRange<L, H, [...Idx, 1], Idx["length"] | Res>;
