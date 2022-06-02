// 参考 https://github.com/type-challenges/type-challenges/issues/10795
type ControlsMap = {
  c: "char";
  s: "string";
  d: "dec";
  o: "oct";
  h: "hex";
  f: "float";
  p: "pointer";
};

type ParsePrintFormat<
  T extends string,
  Rest extends string[] = []
> = T extends `${infer L}%${infer F}${infer R}`
  ? F extends keyof ControlsMap
    ? ParsePrintFormat<R, [...Rest, ControlsMap[F]]>
    : ParsePrintFormat<R, Rest>
  : Rest;
