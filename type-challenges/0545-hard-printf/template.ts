// 参考 https://github.com/type-challenges/type-challenges/issues/2112
type CharToType = {
  s: string;
  d: number;
};

type Format<T extends string> = T extends `${infer F}%${infer Char}${infer L}`
  ? (arg: Char extends keyof CharToType ? CharToType[Char] : never) => Format<L>
  : string;
