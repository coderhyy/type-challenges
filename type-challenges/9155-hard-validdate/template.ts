// 参考 https://github.com/type-challenges/type-challenges/issues/11380
type D30 =
  | `${0 | 1 | 2}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | "10"
  | "20"
  | "30";
type D31 = D30 | "31";
type D28 = Exclude<D30, "29" | "30">;

type ValidDate<T extends string> = T extends `${
  | "01"
  | "03"
  | "05"
  | "07"
  | "08"
  | "10"
  | "12"}${D31}`
  ? true
  : T extends `${"04" | "06" | "09" | "11"}${D30}`
  ? true
  : T extends `${"02"}${D28}`
  ? true
  : false;
