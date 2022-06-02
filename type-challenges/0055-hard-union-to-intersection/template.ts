// 参考 https://github.com/type-challenges/type-challenges/issues/1051
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  arg: infer I
) => void
  ? I
  : never;
