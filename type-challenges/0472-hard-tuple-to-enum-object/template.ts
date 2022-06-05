// 参考 https://github.com/type-challenges/type-challenges/issues/10450 6 Methods and Summaries
// 参考 https://github.com/type-challenges/type-challenges/issues/10909

// 1.计算当前元素的索引
type GetIndex<
  T extends readonly unknown[],
  K,
  Rest extends unknown[] = []
> = T extends readonly [infer F, ...infer R]
  ? F extends K
    ? Rest["length"]
    : GetIndex<R, K, [...Rest, F]>
  : never;

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number] as Capitalize<K>]: N extends true
    ? GetIndex<T, K>
    : K;
};
