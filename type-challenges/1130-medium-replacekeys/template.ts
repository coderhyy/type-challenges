type ReplaceKeys<U, T, Y extends Record<string, any>> = {
  [key in keyof U]: key extends T
    ? key extends keyof Y
      ? Y[key]
      : never
    : U[key];
};
