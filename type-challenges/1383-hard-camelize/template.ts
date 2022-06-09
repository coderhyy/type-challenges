// 参考 https://github.com/type-challenges/type-challenges/issues/9968
// 处理数组对象 [{}]
type ArrayCamelize<T extends unknown[], R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? ArrayCamelize<Rest, [...R, F extends Record<string, any> ? Camelize<F> : F]>
  : R;

type Camelize<T extends Record<string, any>> = {
  [K in keyof T as K extends `${infer F}_${infer Rest}`
    ? `${F}${Capitalize<Rest>}`
    : K]: T[K] extends unknown[]
    ? ArrayCamelize<T[K]>
    : T[K] extends object // 处理对象
    ? Camelize<T[K]>
    : T[K];
};
