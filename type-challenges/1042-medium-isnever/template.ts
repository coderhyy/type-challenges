// 第一：可以粗略的认为，extends 是判断父子集关系的 子集 extends 父集 ? true : false
// 第二：never 是任何类型的父集因此不能通过 extends 来进行判断

type IsNever<T> = [T] extends [never] ? true : false;
