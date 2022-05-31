// Equal 的原理是什么? https://www.zhihu.com/question/367327849/answer/2444521647
import type { Equal } from "@type-challenges/utils";

// 判断是否存在重复元素
type In<T, U extends unknown[]> = U extends [infer F, ...infer URest]
  ? Equal<F, T> extends true
    ? true
    : In<T, URest>
  : false;

export type Unique<
  T extends unknown[],
  Rest extends unknown[] = []
> = T extends [infer F, ...infer TRest]
  ? In<F, Rest> extends true
    ? Unique<TRest, Rest>
    : Unique<TRest, [...Rest, F]>
  : Rest;
