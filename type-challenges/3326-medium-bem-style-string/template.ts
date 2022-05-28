type EmptyOrBEM<T extends string[], Q extends string> = [T[number]] extends [
  never
]
  ? ""
  : `${Q}${T[number]}`;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${EmptyOrBEM<E, "__">}${EmptyOrBEM<M, "--">}`;
