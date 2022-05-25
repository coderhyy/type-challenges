// 好像运用到了 ts的自推断
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer R}` ? R : never]: T[K];
};
