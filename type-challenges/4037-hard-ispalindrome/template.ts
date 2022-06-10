// 参考 https://github.com/type-challenges/type-challenges/issues/4598
type MyReverse<T, Rest extends string = ""> = T extends `${infer F}${infer R}`
  ? `${MyReverse<R>}${F}${Rest}`
  : Rest;

type IsPalindrome<T extends string | number> = `${T}` extends MyReverse<`${T}`>
  ? true
  : false;
