import type { Equal } from "@type-challenges/utils";

export type IndexOf<
  T extends unknown[],
  U,
  Res extends unknown[] = []
> = T extends [infer F, ...infer TRes]
  ? Equal<F, U> extends true
    ? Res["length"]
    : IndexOf<TRes, U, [...Res, F]>
  : -1;

// 主要运用了Res['length']记录当前元素的索引，如果找到则返回Res['length'],否则递归往下,没有则返回-1
