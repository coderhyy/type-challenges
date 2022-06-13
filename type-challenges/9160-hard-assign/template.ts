// 参考 https://github.com/type-challenges/type-challenges/issues/10566
type Assign<
  T extends Record<string, unknown>,
  U extends unknown[]
> = U extends [infer F, ...infer Rest]
  ? F extends Record<string, unknown>
    ? Assign<
        {
          [K in keyof T | keyof F]: K extends keyof F
            ? F[K]
            : K extends keyof T
            ? T[K]
            : never;
        },
        Rest
      >
    : Assign<T, Rest>
  : T;
