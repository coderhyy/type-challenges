type FalseVal<V> = V extends [] | "" | 0 | false | Record<string, never>
  ? false
  : true;
type AnyOf<T extends readonly any[]> = true extends FalseVal<T[number]>
  ? true
  : false;
