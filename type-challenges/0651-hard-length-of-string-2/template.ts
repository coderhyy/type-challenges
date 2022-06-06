export type LengthOfString<
  S extends string,
  Rest extends unknown[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...Rest, F]>
  : Rest["length"];
