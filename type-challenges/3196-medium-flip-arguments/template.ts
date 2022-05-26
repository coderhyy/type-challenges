// Reverse 是引入3192题的

type FlipArguments<T extends Function> = T extends (
  ...args: infer Args
) => infer Res
  ? (...args: Reverse<Args>) => Res
  : never;
