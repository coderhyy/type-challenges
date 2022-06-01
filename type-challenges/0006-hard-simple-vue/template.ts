// 参考 https://github.com/type-challenges/type-challenges/issues/6556
type ComputedValues<C> = {
  [K in keyof C]: C[K] extends (...args: any[]) => infer R ? R : never;
};

declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D;
  computed: C & ThisType<D & C>;
  methods: M & ThisType<D & M & ComputedValues<C>>;
}): any;
