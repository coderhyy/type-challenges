// 参考 https://github.com/type-challenges/type-challenges/issues/7466
// 不是很理解
type MyUnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer I) => unknown
  ? I
  : never;

// "a" | "obj.e" -> { a: number } & { obj: { e: string }

type DeepPickRes<
  O extends Record<string, any>,
  Target extends string
> = Target extends `${infer F}.${infer Rest}`
  ? {
      [K in F]: DeepPickRes<O[K], Rest>;
    }
  : Target extends keyof O
  ? {
      [K in keyof O as K extends Target ? K : never]: O[K];
    }
  : unknown;

type DeepPick<O extends object, Target extends string> = MyUnionToIntersection<
  DeepPickRes<O, Target>
>;

// DeepPickRes<O, Target>;
