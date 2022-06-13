// 参考 https://github.com/type-challenges/type-challenges/issues/9664
type ToArray<
  T extends number,
  Rest extends number[] = []
> = Rest["length"] extends T ? Rest : ToArray<T, [...Rest, 1]>;

type MyDiff<S extends number, N extends number> = ToArray<S> extends [
  ...ToArray<N>,
  ...infer R
]
  ? R["length"]
  : -1;

type TwoSum<T extends number[], U extends number> = T extends [
  infer F,
  ...infer R
]
  ? MyDiff<U, F & number> extends R[number]
    ? true
    : R extends number[]
    ? TwoSum<R, U>
    : false
  : false;
