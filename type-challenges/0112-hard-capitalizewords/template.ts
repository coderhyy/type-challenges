// 参考 https://github.com/type-challenges/type-challenges/issues/6429
type CapitalizeWordFn<S extends string> = S extends `${infer F}${infer Rest}`
  ? F extends " " | "." | ","
    ? `${F}${CapitalizeWordFn<Capitalize<Rest>>}`
    : `${F}${CapitalizeWordFn<Rest>}`
  : S;

type CapitalizeWords<S extends string> = CapitalizeWordFn<Capitalize<S>>;
