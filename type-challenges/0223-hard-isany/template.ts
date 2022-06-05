import type { Equal } from "@type-challenges/utils";
// 方式 1
// export type IsAny<T> = Equal<T, any>;

// 方式 2
export type IsAny<T> = ((arg: [any]) => [any]) extends (arg: T) => T
  ? true
  : false;
