// 联合类型 递归展开
type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never;

// type p = StringToUnion<"coronavirus">;
