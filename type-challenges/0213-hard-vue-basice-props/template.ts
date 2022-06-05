// 参考 https://github.com/type-challenges/type-challenges/issues/6557
// 好难...
type ClassToType<C> = C extends () => infer T // String/Number/Boolean
  ? T
  : C extends unknown[]
  ? ClassToType<C[number]>
  : C extends new (...args: any) => unknown // user defined constructors
  ? InstanceType<C>
  : never;

// computed props
type ComputedPropsType<P> = {
  [key in keyof P]: P[key] extends { type: infer T }
    ? ClassToType<T>
    : {} extends P[key]
    ? any
    : ClassToType<P[key]>;
};

// computed value
type ComputedValuesType<C> = {
  [K in keyof C]: C[K] extends (...args: unknown[]) => infer R ? R : never;
};

declare function VueBasicProps<P, D, C, M>(options: {
  props: P;
  data: (this: ComputedPropsType<P>) => D;
  computed: C & ThisType<D & ComputedPropsType<P>>;
  methods: M & ThisType<D & ComputedValuesType<C> & M & ComputedPropsType<P>>;
}): any;
