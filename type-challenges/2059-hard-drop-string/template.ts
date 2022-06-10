// 参考 https://github.com/type-challenges/type-challenges/issues/10004
type MyStringToUnion<
  T extends string,
  U extends string = never
> = T extends `${infer F}${infer Rest}` ? MyStringToUnion<Rest, U | F> : U;

type DropString<
  S extends string,
  U extends string,
  R extends string = ""
> = S extends `${infer F}${infer Rest}`
  ? F extends MyStringToUnion<U>
    ? DropString<Rest, U, R>
    : DropString<Rest, U, `${R}${F}`>
  : R;
