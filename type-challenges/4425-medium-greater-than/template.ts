type GreaterThan<
  T extends number,
  U extends number,
  Ary extends unknown[] = []
> = Ary["length"] extends T
  ? false
  : Ary["length"] extends U
  ? true
  : GreaterThan<T, U, [...Ary, 1]>;
