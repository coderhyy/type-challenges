import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyShift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<MyShift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];
