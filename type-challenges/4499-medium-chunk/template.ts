type Chunk<
  // 原始数组
  T extends unknown[],
  // 分组长度
  U extends number,
  Item extends unknown[] = [],
  Res extends unknown[] = []
> = T extends [infer TF, ...infer TRes]
  ? Item["length"] extends U
    ? Chunk<T, U, [], [...Res, Item]>
    : Chunk<TRes, U, [...Item, TF], Res>
  : [...Res, ...(Item extends [] ? [] : [Item])];
