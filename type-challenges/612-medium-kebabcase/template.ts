type KebabCase<
  S extends string,
  First extends boolean = true
> = S extends `${infer F}${infer R}`
  ? First extends true
    ? `${Lowercase<F>}${KebabCase<R, false>}`
    : F extends Lowercase<F>
    ? `${F}${KebabCase<R, false>}`
    : `-${Lowercase<F>}${KebabCase<R, false>}`
  : S;
