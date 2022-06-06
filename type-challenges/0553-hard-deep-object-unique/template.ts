// 参考 https://github.com/type-challenges/type-challenges/issues/9103
// 最后 & { [symbol]?: Path }; 是啥意思...
const symbol = Symbol();

type DeepObjectToUniq<O extends object, Path extends unknown[] = [O]> = {
  [K in keyof O]: O[K] extends object
    ? DeepObjectToUniq<O[K], [...Path, K]>
    : O[K];
} & { [symbol]?: Path };
