// 好难。。
// 参考：https://www.yuque.com/liaojie3/lxxhgu/ogyeiz#giVmO
type String2Union<S extends string> = S extends `${infer L}${infer R}`
  ? L | String2Union<R>
  : never;

type AllCombinations<S extends string, U extends string = String2Union<S>> = [
  U
] extends [never]
  ? ""
  : "" | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];
