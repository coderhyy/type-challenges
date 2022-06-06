// 参考 https://github.com/type-challenges/type-challenges/issues/10191
// 协变与逆变 https://github.com/astak16/blog-ts-challenges/issues/22

// 1.将联合类型转换成函数的交叉类型，通过 infer 推断类型。
export type UnionToIntersection<T> = (
  T extends T ? (k: () => T) => void : never
) extends (arg: infer I) => void
  ? I
  : never;

// 2.获取联合类型的最后一个类型
type GetUnionLast<T> = UnionToIntersection<T> extends () => infer I ? I : never;

// 3.把第二步中取到的值放在数组的第一项 *可以省略这步
// type Prepend<T extends unknown[], F> = [F, ...T];

// 4.
// Union 是任意类型的联合类型
// T 是任意类型的数组，默认是空数组
// Last 是 Union 中最后一位的值，默认 GetUnionLast<Union>
export type UnionToTuple<U, T extends unknown[] = [], L = GetUnionLast<U>> = [
  U
] extends [never]
  ? T
  : UnionToTuple<Exclude<U, L>, [...T, L]>;
