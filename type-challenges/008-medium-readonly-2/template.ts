// type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
//   Readonly<Pick<T, K>>;

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & { [S in Exclude<keyof T, K>]: T[S] };
