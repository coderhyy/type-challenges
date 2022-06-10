type MyExtract<T> = T extends unknown[] ? T[number] : T;
type Intersection<T> = T extends [infer F, ...infer R]
  ? MyExtract<F> & Intersection<R>
  : unknown;
