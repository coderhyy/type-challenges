// 参考 https://github.com/type-challenges/type-challenges/issues/10462
type ToCamelCase<T> = T extends `${infer F}_${infer Rest}`
  ? `${F}${ToCamelCase<Capitalize<Rest>>}`
  : T;

type CamelCase<S extends string> = ToCamelCase<Lowercase<S>>;
