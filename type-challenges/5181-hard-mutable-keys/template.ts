// 参考 https://github.com/type-challenges/type-challenges/issues/10712
import type { Equal } from "@type-challenges/utils";

export type MutableKeys<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K
  : never;
