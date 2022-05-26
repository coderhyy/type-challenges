// Extract 求交集
type TupleToNestedObject<T extends readonly any[], U> = T extends [
  infer F,
  ...infer R
]
  ? {
      [K in Extract<T[number], F>]: TupleToNestedObject<R, U>;
    }
  : U;
