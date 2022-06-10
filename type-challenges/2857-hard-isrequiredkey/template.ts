// 1.
// type IsRequiredKey<T, K extends keyof T = keyof T> = T extends {
//   [P in K]-?: T[P];
// }
//   ? true
//   : false;

// 2.
// type IsRequiredKey<T, K extends keyof T = keyof T> = T extends Required<
//   Pick<T, K>
// >
//   ? true
//   : false;

// 3.
type IsRequiredKey<T, K extends keyof T = keyof T> = T extends Record<K, T[K]>
  ? true
  : false;
