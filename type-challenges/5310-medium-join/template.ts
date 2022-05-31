type Join<T extends unknown[], U extends string | number> = T extends [
  infer F,
  ...infer TRes
]
  ? `${F & string}${TRes["length"] extends 0 ? "" : U}${Join<TRes, U>}`
  : "";
