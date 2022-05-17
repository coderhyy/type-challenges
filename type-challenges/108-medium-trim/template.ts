type rules = " " | "\n" | "\t";

type Trim<S extends string> = S extends
  | `${rules}${infer R}`
  | `${infer R}${rules}`
  ? Trim<R>
  : S;
