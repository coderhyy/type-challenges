type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer argArray
) => infer R
  ? (...args: [...argArray, A]) => R
  : never;
