import type { Equal } from "@type-challenges/utils";

// 先倒着一个一个提取元素，如果匹配，返回Rest元素个数，否则继续提取，直到找到为止。
export type LastIndexOf<T extends unknown[], U> = T extends [
  ...infer TRest,
  infer L
]
  ? Equal<L, U> extends true
    ? TRest["length"]
    : LastIndexOf<TRest, U>
  : -1;
