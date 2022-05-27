// 还不是很懂...
type FlattenDepth<
  T extends unknown[],
  U extends number = 1,
  Result extends unknown[] = []
> = Result["length"] extends U
  ? T
  : T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...FlattenDepth<F, U, [any, ...Result]>, ...FlattenDepth<R, U, Result>]
    : [F, ...FlattenDepth<R, U, Result>]
  : T;
