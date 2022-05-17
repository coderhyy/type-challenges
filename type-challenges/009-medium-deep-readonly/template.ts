//考虑到如果是函数的话，直接返回函数，这里不能extends object, 因为函数也是object
type DeepReadonly<T> = T extends Function
  ? T
  : {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    };
