type ObjectEntries<
  T extends object,
  K extends keyof T = keyof T
> = K extends unknown
  ? [K, T[K] extends infer U | undefined ? U : T[K]]
  : never;
