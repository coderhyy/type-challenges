// 参考 https://github.com/type-challenges/type-challenges/issues/9654
type Get<
  T extends Record<string, any>,
  K extends string
> = K extends `${infer Key}.${infer Path}`
  ? Get<T[Key], Path>
  : K extends keyof T
  ? T[K]
  : never;

// K extends keyof T 返回值
// type cases = keyof {
//   foo: {
//     bar: {
//       value: "foobar";
//       count: 6;
//     };
//     included: true;
//   };
//   hello: "world";
// };
