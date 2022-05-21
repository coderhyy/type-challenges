// https://github.com/type-challenges/type-challenges/issues/5832
type Mixin<T, P> = {
  [K in keyof (T & P)]: (T & P)[K];
};

type Diff<O, O1> = Omit<Mixin<O, O1>, keyof (O | O1)>;
