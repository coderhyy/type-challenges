type FilterOut<T extends any[], F, R extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? [First] extends [F]
    ? FilterOut<Rest, F, R>
    : FilterOut<Rest, F, [...R, First]>
  : R;
