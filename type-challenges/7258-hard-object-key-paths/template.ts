// 参考 https://github.com/type-challenges/type-challenges/issues/7745

type ObjectKeyPaths<T extends object> = T extends Record<string, any>
  ? {
      [K in keyof T]: T[K] extends Record<string, any>
        ? K extends string
          ? `${K}.${ObjectKeyPaths<T[K]>}` | K
          : never
        : K;
    }[keyof T]
  : never;
