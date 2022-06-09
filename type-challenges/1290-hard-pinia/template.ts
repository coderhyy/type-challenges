// 参考 https://github.com/type-challenges/type-challenges/issues/7578
type GetGettersType<T> = {
  [K in keyof T]: T[K] extends (...args: unknown[]) => infer R ? R : never;
};

declare function defineStore<S, G, A>(store: {
  id: string;
  state: () => S;
  getters: G & ThisType<Readonly<S> & GetGettersType<G>>;
  actions: A & ThisType<S & A & Readonly<G>>;
}): S & GetGettersType<G> & A;
