// https://github.com/type-challenges/type-challenges/issues/614
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : never;
